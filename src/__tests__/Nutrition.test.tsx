import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nutrition from '../pages/Nutrition';
import { mockContextValues } from '../test-util/mockdata';
import { BagContext } from '../BagContext';

test('nutrition page render test and click nutrition nav', async () => {
  render(
    <BrowserRouter>
      <BagContext.Provider value={mockContextValues}>
        <Nutrition />
      </BagContext.Provider>
    </BrowserRouter>
  );

  const soupsText = screen.getAllByText(/soups/i)[0] as HTMLAnchorElement;
  
  userEvent.click(soupsText);
  await waitFor(() => {
    expect(window.location.hash).toEqual('#soups');
  });
});
