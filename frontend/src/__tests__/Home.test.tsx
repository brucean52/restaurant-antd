import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home';

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

test('home page render test', async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(screen.getByText(/new chopstix restaurant/i)).toBeInTheDocument();
  expect(screen.getByText(/order now/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/business hours/i)).toBeInTheDocument();
  expect(screen.getByText(/location/i)).toBeInTheDocument();
  userEvent.click(screen.getByText(/order now/i));
  await waitFor(() => {
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
  expect(mockNavigate).toHaveBeenCalledWith('/menu');
});
