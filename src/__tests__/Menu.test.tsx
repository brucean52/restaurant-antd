import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from '../pages/Menu';
import { mockContextValues } from '../test-util/mockdata';
import { BagContext } from '../BagContext';

test('menu page render test and click menu nav', async () => {
  render(
    <BrowserRouter>
      <BagContext.Provider value={mockContextValues}>
        <Menu />
      </BagContext.Provider>
    </BrowserRouter>
  );

  const beveragesText = screen.getAllByText(/beverages/i)[0] as HTMLAnchorElement;
  
  userEvent.click(beveragesText);
  await waitFor(() => {
    expect(window.location.hash).toEqual('#beverages');
  });

  const appetizersText = screen.getAllByText(/appetizers/i);
  expect(appetizersText).toHaveLength(2);

  userEvent.click(screen.getByLabelText('egg-drop-soup-card'));
  await waitFor(() => {
    expect(screen.getByText('Velvety broth, julienned carrots, green onion')).toBeInTheDocument();
  });
});
