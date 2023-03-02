import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { mockContextValues, mockItem1 } from '../assets/mockdata';
import { BagContext } from '../BagContext';

describe('Delete Confirm Modal tests', () => {
  const mockHandleModalClose = jest.fn();
  const mockDeleteItem = { bagId: mockItem1.bagId, name: mockItem1.name };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('delete modal is hidden', () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <DeleteConfirmModal
          isModalOpen={false}
          handleModalClose={mockHandleModalClose}
          deleteItemOptions={mockDeleteItem}
        />
      </BagContext.Provider>
    );

    expect(screen.queryByText(/remove item/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/are you sure you want to remove/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/chicken lettuce wraps/i)).not.toBeInTheDocument();
  });

  test('delete modal is renders', () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <DeleteConfirmModal
          isModalOpen={true}
          handleModalClose={mockHandleModalClose}
          deleteItemOptions={mockDeleteItem}
        />
      </BagContext.Provider>
    );

    expect(screen.getByText(/remove item/i)).toBeInTheDocument();
    expect(screen.getByText(/are you sure you want to remove/i)).toBeInTheDocument();
    expect(screen.getByText(/chicken lettuce wraps/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('remove-button'));
    expect(mockHandleModalClose).toHaveBeenCalledTimes(1);
    expect(mockContextValues.deleteItem).toHaveBeenCalledTimes(1);
  });
});


