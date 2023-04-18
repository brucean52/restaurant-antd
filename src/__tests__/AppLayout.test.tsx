import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppLayout from '../components/AppLayout';
import { mockContextValues } from '../test-util/mockdata';
import { BagContext } from '../BagContext';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockNavigate
}));

describe('App Layout Component Tests', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('app layout header render test', async () => {
    render(
      <MemoryRouter initialEntries={["/menu"]}>
        <BagContext.Provider value={mockContextValues}>
          <AppLayout />
        </BagContext.Provider>
      </MemoryRouter>
    );
  
    expect(screen.getByText(/menu/i)).toBeInTheDocument();
    expect(screen.getByText('New Chopstix Restaurant ©2023 Created by Bruce An')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/6/i)).toBeInTheDocument();
    });
  });

  test('app header menu nav click test', async () => {
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

  test('app header bag button click/hover test', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <AppLayout />
        </BagContext.Provider>
      </BrowserRouter>
    );
    const bagButton = screen.getByLabelText('bag-button');
  
    userEvent.hover(bagButton);
    await waitFor(() => {
      expect(bagButton).toHaveStyle({ 'background-color': '#303b41'});
    });

    userEvent.unhover(bagButton);
    await waitFor(() => {
      expect(bagButton).toHaveStyle({ 'background-color': '#0F1519'});
    });

    userEvent.click(bagButton);
    await waitFor(() => {
      expect(screen.getByText(/my bag/i)).toBeInTheDocument();    
    });
  });
});


