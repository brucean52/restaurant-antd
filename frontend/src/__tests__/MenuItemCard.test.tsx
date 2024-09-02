import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuItemCard from '../components/MenuItemCard';
import { mockMenuDataArray } from '../test-util/mockMenuData';
import { mockContextValues } from '../test-util/mockdata';
import { BagContext } from '../BagContext';

describe('Menu Item Card component tests', () => {

  const mockHandleMenuItemClicked = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders item with no options, shows price', async () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <MenuItemCard
          menuItem={mockMenuDataArray[0]}
          handleMenuItemClicked={mockHandleMenuItemClicked}
        />
      </BagContext.Provider>
    );

    expect(screen.getByText(/chicken lettuce wraps/i)).toBeInTheDocument();
    expect(screen.getByText(/16.00/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('chicken-lettuce-wraps-card'));
    await waitFor(() => {
      expect(mockHandleMenuItemClicked).toHaveBeenCalledTimes(1);
    });
  });

  test('renders item with options, does not show price', async () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <MenuItemCard
          menuItem={mockMenuDataArray[9]}
          handleMenuItemClicked={mockHandleMenuItemClicked}
        />
      </BagContext.Provider>
    );

    expect(screen.getByText(/egg drop soup/i)).toBeInTheDocument();
    expect(screen.queryByText(/0.00/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByLabelText('egg-drop-soup-card'));
    await waitFor(() => {
      expect(mockHandleMenuItemClicked).toHaveBeenCalledTimes(1);
    });
  });
});

