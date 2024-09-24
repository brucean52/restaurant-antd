import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuItemModal from '../components/MenuItemModal';
import { mockMenuDataArray } from './test-util/mockMenuData';
import { defaultBagItemOptions } from '../assets/defaultData';
import {
  mockAppStateValues,
  mockEmptyAppStateValues,
  mockBagItemOptionsThree,
  mockBagItemOptionsTwo
} from './test-util/mockdata';
import { useAppStore } from '../store/useAppStore';

describe('Menu Item Modal component tests', () => {

  const mockHandleModalClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    useAppStore.setState(mockEmptyAppStateValues);
  });

  test('modal is hidden', () => {
    render(
      <MenuItemModal
        isEdit={false}
        editItemOptions={defaultBagItemOptions}
        isModalOpen={false}
        menuItem={mockMenuDataArray[0]}
        handleModalClose={mockHandleModalClose}
      />
    );

    expect(screen.queryByLabelText('close-item-modal-btn')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('submit-button')).not.toBeInTheDocument();
  });

  test('renders with menu item and can adjust quantity', async () => {
    render(
      <MenuItemModal
        isEdit={false}
        editItemOptions={defaultBagItemOptions}
        isModalOpen={true}
        menuItem={mockMenuDataArray[0]}
        handleModalClose={mockHandleModalClose}
      />
    );
    
    const quantityInput = screen.getByLabelText('qty-input') as HTMLInputElement;
    
    expect(screen.getByText(/chicken lettuce wraps/i)).toBeInTheDocument();
    expect(screen.getByText('A secret family recipe and our signature dish. Enough said.')).toBeInTheDocument();
    expect(screen.getByText(/16.00/i)).toBeInTheDocument();
    expect(quantityInput.value).toBe('1');
    expect(screen.getByText('Add to Bag $16.00')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('qty-add-button'));
    await waitFor(() => {
      expect(quantityInput.value).toBe('2');
    });
    expect(screen.getByText('Add to Bag $32.00')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('qty-add-button'));
    await waitFor(() => {
      expect(quantityInput.value).toBe('3');
    });
    expect(screen.getByText('Add to Bag $48.00')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('qty-minus-button'));
    await waitFor(() => {
      expect(quantityInput.value).toBe('2');
    });
    expect(screen.getByText('Add to Bag $32.00')).toBeInTheDocument();

    fireEvent.change(quantityInput, {target: {value: '23'}});
    await waitFor(() => {
      expect(quantityInput.value).toBe('23');
    });
    expect(screen.getByText('Add to Bag $368.00')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('submit-button'));
    await waitFor(() => {
      expect(mockHandleModalClose).toHaveBeenCalledTimes(1);
    });
    expect(useAppStore.getState().updateItem).toHaveBeenCalledTimes(0);
    expect(useAppStore.getState().addItem).toHaveBeenCalledTimes(1);
  });

  test('renders with menu item with radio option and can add special instructions', async () => {
    render(
      <MenuItemModal
        isEdit={false}
        editItemOptions={defaultBagItemOptions}
        isModalOpen={true}
        menuItem={mockMenuDataArray[9]}
        handleModalClose={mockHandleModalClose}
      />
    );

    const specialInstructionsInput = screen.getByLabelText('special-instructions-textarea') as HTMLInputElement;
    
    expect(screen.getByText(/egg drop soup/i)).toBeInTheDocument();
    expect(screen.getByText('Velvety broth, julienned carrots, green onion')).toBeInTheDocument();
    expect(screen.getByText(/soup size/i)).toBeInTheDocument();
    
    fireEvent.change(specialInstructionsInput, {target: {value: 'less spicy'}});
    await waitFor(() => {
      expect(screen.getByText('less spicy')).toBeInTheDocument();
    });
    expect(screen.getByText('Add to Bag $0.00')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('cup-radio'));
    await waitFor(() => {
      expect(screen.getByText('Add to Bag $7.50')).toBeInTheDocument();
    });
  });

  test('renders with edit dumpling options and update is clicked', async () => {
    useAppStore.setState(mockAppStateValues);

    render(
      <MenuItemModal
        isEdit={true}
        editItemOptions={mockBagItemOptionsTwo}
        isModalOpen={true}
        menuItem={mockMenuDataArray[5]}
        handleModalClose={mockHandleModalClose}
      />
    );

    const quantityInput = screen.getByLabelText('qty-input') as HTMLInputElement;
    const specialInstructionsInput = screen.getByLabelText('special-instructions-textarea') as HTMLInputElement;
    
    expect(screen.getByText('Pork Dumplings | 6 Count')).toBeInTheDocument();
    expect(screen.getByText('Pan-fried or steamed, light chili sauce drizzle')).toBeInTheDocument();
    expect(screen.getByText(/dumpling type/i)).toBeInTheDocument();
    expect(quantityInput.value).toBe('2');
    expect(screen.getByText('Update Item $29.00')).toBeInTheDocument();
    expect(screen.getByText('extra spicy')).toBeInTheDocument();

    fireEvent.change(specialInstructionsInput, {target: {value: ''}});
    await waitFor(() => {
      expect(screen.queryByText('extra spicy')).not.toBeInTheDocument();
    });

    userEvent.click(screen.getByLabelText('submit-button'));
    await waitFor(() => {
      expect(mockHandleModalClose).toHaveBeenCalledTimes(1);
    });
    expect(useAppStore.getState().addItem).toHaveBeenCalledTimes(0);
    expect(useAppStore.getState().updateItem).toHaveBeenCalledTimes(1);
  });

  test('renders with edit protein options, but close modal clicked', async () => {
    useAppStore.setState(mockAppStateValues);

    render(
      <MenuItemModal
        isEdit={true}
        editItemOptions={mockBagItemOptionsThree}
        isModalOpen={true}
        menuItem={mockMenuDataArray[34]}
        handleModalClose={mockHandleModalClose}
      />
    );

    const quantityInput = screen.getByLabelText('qty-input') as HTMLInputElement;
    
    expect(screen.getByText('Pad Thai')).toBeInTheDocument();
    expect(quantityInput.value).toBe('1');
    expect(screen.getByText('Update Item $23.50')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('chicken-radio'));
    await waitFor(() => {
      expect(screen.getByText('Update Item $20.00')).toBeInTheDocument();
    });
    
    userEvent.click(screen.getByLabelText('close-item-modal-btn'));
    await waitFor(() => {
      expect(mockHandleModalClose).toHaveBeenCalledTimes(1);
    });
    expect(useAppStore.getState().addItem).toHaveBeenCalledTimes(0);
    expect(useAppStore.getState().updateItem).toHaveBeenCalledTimes(0);
  });

});
