import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BagDrawer from '../components/BagDrawer';
import { mockContextValues, mockEmptyContextValues } from '../test-util/mockdata';
import { BagContext } from '../BagContext';

describe('Bag Drawer component tests', () => {

  const mockSetOpenDrawer = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
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

  test('edit item click test', async () => {
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

  test('delete item click test', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <BagDrawer openDrawer={true} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getByLabelText('delete-item-1'));
    await waitFor(() => {
      expect(screen.getByText(/are you sure you want to remove/i)).toBeInTheDocument();
    });
  });

  test('close button click test', async () => {
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

  test('update quantity select test', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <BagDrawer openDrawer={true} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getAllByLabelText('select-qty-0')[1]);
    await waitFor(() => {
      expect(screen.getByText('5')).toBeInTheDocument();
    });
    userEvent.click(screen.getByText('5'));
    await waitFor(() => {
      expect(mockContextValues.updateItem).toHaveBeenCalledTimes(1);
    });
  });

  test('custom input update quantity test', async () => {
    render(
      <BrowserRouter>
        <BagContext.Provider value={mockContextValues}>
          <BagDrawer openDrawer={true} setOpenDrawer={mockSetOpenDrawer}/>
        </BagContext.Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getAllByLabelText('select-qty-1')[1]);
    await waitFor(() => {
      expect(screen.getByText('6+')).toBeInTheDocument();
    });
    userEvent.click(screen.getByText('6+'));
    await waitFor(() => {
      expect(screen.getByLabelText('custom-input-qty-1')).toBeInTheDocument();
    });
    expect(mockContextValues.updateItem).toHaveBeenCalledTimes(0);
    fireEvent.change(screen.getByLabelText('custom-input-qty-1'), {target: {value: '10'}});
    userEvent.click(screen.getByLabelText('update-qty-btn-1'));
    await waitFor(() => {
      expect(mockContextValues.updateItem).toHaveBeenCalledTimes(1);
    });
  });
});
