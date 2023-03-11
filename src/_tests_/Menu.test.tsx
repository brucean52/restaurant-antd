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
  await waitFor(() => {
    const appetizersText = screen.getAllByText(/appetizers/i);
    expect(appetizersText).toHaveLength(2);
  });

  await waitFor(() => {
    const bowlText = screen.getAllByText(/all day rice bowls/i);
    expect(bowlText).toHaveLength(2);
  });

  await waitFor(() => {
    const sideOrdersText = screen.getAllByText(/side orders/i);
    expect(sideOrdersText).toHaveLength(2);
  });
  
  userEvent.click(screen.getByLabelText('link-beverages'));
  await waitFor(() => {
    expect(window.location.hash).toEqual('#beverages');
  });
});
