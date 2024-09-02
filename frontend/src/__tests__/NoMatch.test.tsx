import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NoMatch from '../pages/NoMatch';

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...mod,
    useNavigate: () => mockNavigate,
  };
});

test('no match page render test', async () => {
  render(
    <BrowserRouter>
      <NoMatch />
    </BrowserRouter>
  );

  expect(screen.getByText(/Sorry, the page you visited does not exist./i)).toBeInTheDocument();
  expect(screen.getByText(/404/i)).toBeInTheDocument();
  expect(screen.getByText(/back home/i)).toBeInTheDocument();
  userEvent.click(screen.getByText(/back home/i));
  await waitFor(() => {
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
  expect(mockNavigate).toHaveBeenCalledWith('/');
});
