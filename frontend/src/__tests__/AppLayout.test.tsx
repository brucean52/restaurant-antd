import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppLayout from '../components/AppLayout';
import { mockAppStateValues, mockEmptyAppStateValues } from './test-util/mockdata';
import { useAppStore } from '../store/useAppStore';

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

  beforeEach(() => {
    vi.clearAllMocks();
    useAppStore.setState(mockEmptyAppStateValues);
  });

  test('header render test with non-empty bag', async () => {
    useAppStore.setState(mockAppStateValues)

    render(
      <MemoryRouter initialEntries={["/menu"]}>
        <AppLayout />
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
        <AppLayout />
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
        <AppLayout />
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
        <AppLayout />
      </BrowserRouter>
    );
  
    userEvent.click(screen.getByLabelText('toggle-theme-btn'));
    await waitFor(() => {
      expect(useAppStore.getState().toggleDarkMode).toHaveBeenCalledTimes(1);
    });
  });
});


