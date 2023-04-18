import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BagDrawer from '../components/BagDrawer';
import { mockContextValues, mockEmptyContextValues } from '../test-util/mockdata';
import { BagContext } from '../BagContext';

describe('Bag Drawer component tests', () => {

  const mockSetOpenDrawer = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('bag drawer is hidden', () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockEmptyContextValues}>
          <BagDrawer openDrawer={false} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </BrowserRouter>
    );

    expect(screen.queryByText(/my bag/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/start your order/i)).not.toBeInTheDocument();
  });

  test('bag drawer is empty', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockEmptyContextValues}>
          <BagDrawer openDrawer={true} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/my bag/i)).toBeInTheDocument();
    expect(screen.getByText(/your bag is empty/i)).toBeInTheDocument();
    expect(screen.getByText(/start your order/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('start-order-button'));
    await waitFor(() => {
      expect(mockSetOpenDrawer).toHaveBeenCalledTimes(1);
    });
  });

  test('bag drawer renders content', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <BagDrawer openDrawer={true} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </BrowserRouter>
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
    await waitFor(() => {
      expect(mockSetOpenDrawer).toHaveBeenCalledTimes(1);
    });
  });

  test('bag drawer edit item click test', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <BagDrawer openDrawer={true} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getByLabelText('edit-item-1'));
    await waitFor(() => {
      expect(screen.getByText('Update Item $29.00')).toBeInTheDocument();
    });
  });

  test('bag drawer delete item click test', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <BagDrawer openDrawer={true} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getByLabelText('delete-item-1'));
    await waitFor(() => {
      expect(screen.getByText('Remove Item')).toBeInTheDocument();
    });
  });

  test('bag drawer close button click test', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <BagDrawer openDrawer={true} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getByLabelText('close-drawer-button'));
    await waitFor(() => {
      expect(mockSetOpenDrawer).toHaveBeenCalledTimes(1);
    });
  });
});
