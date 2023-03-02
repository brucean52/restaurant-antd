import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuItemCard from '../components/MenuItemCard';
import { menuDataArray } from '../assets/menuData';
import { mockContextValues } from '../assets/mockdata';
import { BagContext } from '../BagContext';

describe('Menu Item Card component tests', () => {

  const mockHandleMenuItemClicked = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders item with no options, shows price', () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <MenuItemCard
          menuItem={menuDataArray[0]}
          handleMenuItemClicked={mockHandleMenuItemClicked}
        />
      </BagContext.Provider>
    );

    expect(screen.getByText(/chicken lettuce wraps/i)).toBeInTheDocument();
    expect(screen.getByText(/16.00/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('chicken-lettuce-wraps-card'));
    expect(mockHandleMenuItemClicked).toHaveBeenCalledTimes(1);
  });

  test('renders item with options, does not show price', () => {
    render(
      <BagContext.Provider value={mockContextValues}>
        <MenuItemCard
          menuItem={menuDataArray[9]}
          handleMenuItemClicked={mockHandleMenuItemClicked}
        />
      </BagContext.Provider>
    );

    expect(screen.getByText(/egg drop soup/i)).toBeInTheDocument();
    expect(screen.queryByText(/0.00/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByLabelText('egg-drop-soup-card'));
    expect(mockHandleMenuItemClicked).toHaveBeenCalledTimes(1);
  });
});

