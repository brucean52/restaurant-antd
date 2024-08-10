import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nutrition from '../pages/Nutrition';

test('nutrition page render test and click nutrition nav', async () => {
  render(
    <BrowserRouter>
      <Nutrition />
    </BrowserRouter>
  );

  const soupsText = screen.getAllByText(/soups/i)[0] as HTMLAnchorElement;
  
  userEvent.click(soupsText);
  await waitFor(() => {
    expect(window.location.hash).toEqual('#soups');
  });
});
