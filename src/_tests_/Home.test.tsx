import { HashRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home';
import { mockContextValues } from '../assets/mockdata';
import { BagContext } from '../BagContext';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockNavigate
}));

test('home page render test', () => {
  render(
    <HashRouter>
      <BagContext.Provider value={mockContextValues}>
        <Home />
      </BagContext.Provider>
    </HashRouter>
  );

  expect(screen.getByText(/new chopstix restaurant/i)).toBeInTheDocument();
  expect(screen.getByText(/order now/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/business hours/i)).toBeInTheDocument();
  expect(screen.getByText(/location/i)).toBeInTheDocument();
  userEvent.click(screen.getByText(/order now/i));
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('/menu');
});
