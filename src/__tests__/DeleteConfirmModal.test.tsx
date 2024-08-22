import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { mockContextValues, mockItemOne } from '../test-util/mockdata';
import { BagContext } from '../BagContext';

describe('Delete Confirm Modal tests', () => {
  const mockHandleModalClose = vi.fn();
  const mockDeleteItem = { bagId: mockItemOne.bagItemId, name: mockItemOne.name };

  afterEach(() => {
    vi.clearAllMocks();
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

    expect(screen.queryByText(/are you sure you want to remove/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/chicken lettuce wraps/i)).not.toBeInTheDocument();
  });

  test('delete modal is renders and remove is clicked', async () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <DeleteConfirmModal
          isModalOpen={true}
          handleModalClose={mockHandleModalClose}
          deleteItemOptions={mockDeleteItem}
        />
      </BagContext.Provider>
    );

    expect(screen.getByText(/are you sure you want to remove/i)).toBeInTheDocument();
    expect(screen.getByText(/chicken lettuce wraps/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('remove-button'));
    await waitFor(() => {
      expect(mockHandleModalClose).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      expect(mockContextValues.deleteItem).toHaveBeenCalledTimes(1);
    });
  });

  test('delete modal is renders and cancel is clicked', async () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <DeleteConfirmModal
          isModalOpen={true}
          handleModalClose={mockHandleModalClose}
          deleteItemOptions={mockDeleteItem}
        />
      </BagContext.Provider>
    );

    expect(screen.getByText(/are you sure you want to remove/i)).toBeInTheDocument();
    expect(screen.getByText(/chicken lettuce wraps/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('cancel-button'));
    await waitFor(() => {
      expect(mockHandleModalClose).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      expect(mockContextValues.deleteItem).toHaveBeenCalledTimes(0);
    });
  });
});


