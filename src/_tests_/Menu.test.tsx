import { HashRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Menu from '../pages/Menu';
import { mockContextValues } from '../assets/mockdata';
import { BagContext } from '../BagContext';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockNavigate
}));

test('menu page render test', async () => {
  render(
    <HashRouter>
      <BagContext.Provider value={mockContextValues}>
        <Menu />
      </BagContext.Provider>
    </HashRouter>
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
});
