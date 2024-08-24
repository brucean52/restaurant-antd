import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppLayout from '../components/AppLayout';
import { mockContextValues } from '../test-util/mockdata';
import { BagContext } from '../BagContext';

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

describe('App Layout Component Tests', () => {

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('header render test', async () => {
    render(
      <MemoryRouter initialEntries={["/menu"]}>
        <BagContext.Provider value={mockContextValues}>
          <AppLayout />
        </BagContext.Provider>
      </MemoryRouter>
    );
  
    expect(screen.getByText(/menu/i)).toBeInTheDocument();
    expect(screen.getByText('New Chopstix Restaurant ©2024 Created by Bruce An')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/6/i)).toBeInTheDocument();
    });
  });

  test('menu nav click test', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <AppLayout />
        </BagContext.Provider>
      </BrowserRouter>
    );
  
    userEvent.click(screen.getByText(/menu/i));
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
    });
    expect(mockNavigate).toHaveBeenCalledWith('menu');
  });

  test('nutrition nav click test', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <AppLayout />
        </BagContext.Provider>
      </BrowserRouter>
    );
  
    userEvent.click(screen.getByText(/nutrition/i));
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
    });
    expect(mockNavigate).toHaveBeenCalledWith('nutrition');
  });

  test('theme button click test', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <AppLayout />
        </BagContext.Provider>
      </BrowserRouter>
    );
  
    userEvent.click(screen.getByLabelText('toggle-theme-btn'));
    await waitFor(() => {
      expect(mockContextValues.toggleDarkMode).toHaveBeenCalledTimes(1);
    });
  });
});


