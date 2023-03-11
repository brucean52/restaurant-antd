import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuItemModal from '../components/MenuItemModal';
import { menuDataArray } from '../assets/menuData';
import { defaultBagItemOptions } from '../assets/defaultData';
import { mockContextValues, mockBagItemOptionsThree, mockBagItemOptionsTwo } from '../assets/mockdata';
import { BagContext } from '../BagContext';

describe('Menu Item Modal component tests', () => {

  const mockHandleModalClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('modal is hidden', () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <MenuItemModal
          isEdit={false}
          editItemOptions={defaultBagItemOptions}
          isModalOpen={false}
          menuItem={menuDataArray[0]}
          handleModalClose={mockHandleModalClose}
        />
      </BagContext.Provider>
    );

    expect(screen.queryByLabelText('close-item-modal-btn')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('submit-button')).not.toBeInTheDocument();
  });

  test('renders with menu item and can adjust quantity', async () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <MenuItemModal
          isEdit={false}
          editItemOptions={defaultBagItemOptions}
          isModalOpen={true}
          menuItem={menuDataArray[0]}
          handleModalClose={mockHandleModalClose}
        />
      </BagContext.Provider>
    );
    
    const quantityInput = screen.getByLabelText('qty-input') as HTMLInputElement;

    expect(screen.getByText(/chicken lettuce wraps/i)).toBeInTheDocument();
    expect(screen.getByText('A secret family recipe and our signature dish. Enough said.')).toBeInTheDocument();
    expect(screen.getByText(/16.00/i)).toBeInTheDocument();
    expect(quantityInput.value).toBe('1');
    expect(screen.getByText('Add to Bag $16.00')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('qty-add-button'));
    expect(quantityInput.value).toBe('2');
    expect(screen.getByText('Add to Bag $32.00')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('qty-add-button'));
    expect(quantityInput.value).toBe('3');
    expect(screen.getByText('Add to Bag $48.00')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('qty-minus-button'));
    expect(quantityInput.value).toBe('2');
    expect(screen.getByText('Add to Bag $32.00')).toBeInTheDocument();
    fireEvent.change(quantityInput, {target: {value: '23'}});
    expect(quantityInput.value).toBe('23');
    expect(screen.getByText('Add to Bag $368.00')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('submit-button'));
    await waitFor(() => {
      expect(mockHandleModalClose).toHaveBeenCalledTimes(1);
      
    });
    expect(mockContextValues.updateItem).toHaveBeenCalledTimes(0);
    expect(mockContextValues.addItem).toHaveBeenCalledTimes(1);
  });

  test('renders with menu item with radio option and can add special instructions', async () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <MenuItemModal
          isEdit={false}
          editItemOptions={defaultBagItemOptions}
          isModalOpen={true}
          menuItem={menuDataArray[9]}
          handleModalClose={mockHandleModalClose}
        />
      </BagContext.Provider>
    );

    const quantityInput = screen.getByLabelText('qty-input') as HTMLInputElement;
    const specialInstructionsInput = screen.getByLabelText('special-instructions-textarea') as HTMLInputElement;
    
    expect(screen.getByText(/egg drop soup/i)).toBeInTheDocument();
    expect(screen.getByText('Velvety broth, julienned carrots, green onion')).toBeInTheDocument();
    expect(screen.getByText(/soup size/i)).toBeInTheDocument();
    fireEvent.change(specialInstructionsInput, {target: {value: 'less spicy'}});
    expect(screen.getByText('less spicy')).toBeInTheDocument();
    expect(screen.getByText('Add to Bag $0.00')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('qty-add-button'));
    expect(quantityInput.value).toBe('2');
    expect(screen.getByText('Add to Bag $0.00')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('cup-radio'));
    expect(screen.getByText('Add to Bag $15.00')).toBeInTheDocument();
  });

  test('renders with edit dumpling options and update is clicked', async () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <MenuItemModal
          isEdit={true}
          editItemOptions={mockBagItemOptionsTwo}
          isModalOpen={true}
          menuItem={menuDataArray[5]}
          handleModalClose={mockHandleModalClose}
        />
      </BagContext.Provider>
    );

    const quantityInput = screen.getByLabelText('qty-input') as HTMLInputElement;
    const specialInstructionsInput = screen.getByLabelText('special-instructions-textarea') as HTMLInputElement;
    
    expect(screen.getByText('Pork Dumplings | 6 Count')).toBeInTheDocument();
    expect(screen.getByText('Pan-fried or steamed, light chili sauce drizzle')).toBeInTheDocument();
    expect(screen.getByText(/dumpling type/i)).toBeInTheDocument();
    expect(quantityInput.value).toBe('2');
    expect(screen.getByText('Update Item $29.00')).toBeInTheDocument();
    expect(screen.getByText('extra spicy')).toBeInTheDocument();
    fireEvent.change(specialInstructionsInput, {target: {value: ''}})
    expect(screen.queryByText('extra spicy')).not.toBeInTheDocument();
    userEvent.click(screen.getByLabelText('qty-add-button'));
    expect(quantityInput.value).toBe('3');
    expect(screen.getByText('Update Item $43.50')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('submit-button'));
    await waitFor(() => {
      expect(mockHandleModalClose).toHaveBeenCalledTimes(1);
    });
    expect(mockContextValues.addItem).toHaveBeenCalledTimes(0);
    expect(mockContextValues.updateItem).toHaveBeenCalledTimes(1);
  });

  test('renders with edit protein options, but close modal clicked', async () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <MenuItemModal
          isEdit={true}
          editItemOptions={mockBagItemOptionsThree}
          isModalOpen={true}
          menuItem={menuDataArray[34]}
          handleModalClose={mockHandleModalClose}
        />
      </BagContext.Provider>
    );

    const quantityInput = screen.getByLabelText('qty-input') as HTMLInputElement;
    
    expect(screen.getByText('Pad Thai')).toBeInTheDocument();
    expect(quantityInput.value).toBe('1');
    expect(screen.getByText('Update Item $23.50')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('chicken-radio'));
    expect(screen.getByText('Update Item $20.00')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('close-item-modal-btn'));
    await waitFor(() => {
      expect(mockHandleModalClose).toHaveBeenCalledTimes(1);
    });
    expect(mockContextValues.addItem).toHaveBeenCalledTimes(0);
    expect(mockContextValues.updateItem).toHaveBeenCalledTimes(0);
  });

});
