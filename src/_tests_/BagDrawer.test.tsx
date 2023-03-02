import { HashRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BagDrawer from '../components/BagDrawer';
import { mockContextValues, mockEmptyContextValues } from '../assets/mockdata';
import { BagContext } from '../BagContext';

describe('Bag Drawer component tests', () => {

  const mockSetOpenDrawer = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('bag drawer is hidden', () => {
    render(
      <HashRouter>
        <BagContext.Provider value={mockEmptyContextValues}>
          <BagDrawer openDrawer={false} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </HashRouter>
    );

    expect(screen.queryByText(/my bag/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/start your order/i)).not.toBeInTheDocument();
  });

  test('bag drawer is empty', () => {
    render(
      <HashRouter>
        <BagContext.Provider value={mockEmptyContextValues}>
          <BagDrawer openDrawer={true} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </HashRouter>
    );

    expect(screen.getByText(/my bag/i)).toBeInTheDocument();
    expect(screen.getByText(/your bag is empty/i)).toBeInTheDocument();
    expect(screen.getByText(/start your order/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('start-order-button'));
    expect(mockSetOpenDrawer).toHaveBeenCalledTimes(1);
  });

  test('bag drawer renders content', () => {
    render(
      <HashRouter>
        <BagContext.Provider value={mockContextValues}>
          <BagDrawer openDrawer={true} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </HashRouter>
    );

    expect(screen.getByText(/my bag/i)).toBeInTheDocument();
    expect(screen.getByText(/chicken lettuce wraps/i)).toBeInTheDocument();
    expect(screen.getByText(/pork dumplings/i)).toBeInTheDocument();
    expect(screen.getByText(/steamed/i)).toBeInTheDocument();
    expect(screen.getByText(/pad thai/i)).toBeInTheDocument();
    expect(screen.getByText(/combo/i)).toBeInTheDocument();
    expect(screen.getByText(/extra spicy/i)).toBeInTheDocument();
  
    expect(screen.getByText(/100.50/i)).toBeInTheDocument();
    expect(screen.getByText(/10.80/i)).toBeInTheDocument();
    expect(screen.getByText(/111.30/i)).toBeInTheDocument();
    expect(screen.getByText(/checkout/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('checkout-button'));
    expect(mockSetOpenDrawer).toHaveBeenCalledTimes(1);
  });
});
