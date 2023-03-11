import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from '../pages/Menu';
import { mockContextValues } from '../assets/mockdata';
import { BagContext } from '../BagContext';

test('menu page render test and click menu nav', async () => {
  render(
    <BrowserRouter>
      <BagContext.Provider value={mockContextValues}>
        <Menu />
      </BagContext.Provider>
    </BrowserRouter>
  );
  
  userEvent.click(screen.getByLabelText('link-beverages'));
  await waitFor(() => {
    expect(window.location.hash).toEqual('#beverages');
  });

  const appetizersText = screen.getAllByText(/appetizers/i);
  expect(appetizersText).toHaveLength(2);

  userEvent.click(screen.getByLabelText('egg-drop-soup-card'));
  expect(screen.getByText('Velvety broth, julienned carrots, green onion')).toBeInTheDocument();

});
