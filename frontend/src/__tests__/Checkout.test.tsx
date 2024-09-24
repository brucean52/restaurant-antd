import { ReactNode } from 'react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkout from '../pages/Checkout';
import { mockAppStateValues } from './test-util/mockdata';
import { useAppStore } from '../store/useAppStore';

interface RenderRouteWithOutletContextProps<T = any> {
  context: T;
  children: ReactNode;
}

const RenderRouteWithOutletContext = <T,>({
  context,
  children,
}: RenderRouteWithOutletContextProps<T>) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet context={context as T} />}>
          <Route index element={children} />
          <Route path="menu" element={<div>mock menu page</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

const outletContextMock = vi.fn();

test('checkout page render test', async () => {
  useAppStore.setState(mockAppStateValues);
  
  render(
    <RenderRouteWithOutletContext context={{setOpenDrawer: outletContextMock}}>
      <Checkout />
    </RenderRouteWithOutletContext>
  );

  expect(screen.getByText(/guest information/i)).toBeInTheDocument();
  expect(screen.getByText(/credit card information/i)).toBeInTheDocument();
  expect(screen.getByText(/new chopstix restaurant/i)).toBeInTheDocument();

  expect(screen.getByText(/chicken lettuce wraps/i)).toBeInTheDocument();
  expect(screen.getByText(/pork dumplings/i)).toBeInTheDocument();
  expect(screen.getByText(/steamed/i)).toBeInTheDocument();
  expect(screen.getByText(/pad thai/i)).toBeInTheDocument();
  expect(screen.getByText(/combo/i)).toBeInTheDocument();
  expect(screen.getByText(/extra spicy/i)).toBeInTheDocument();

  expect(screen.getByText(/100.50/i)).toBeInTheDocument();
  expect(screen.getByText(/10.80/i)).toBeInTheDocument();
  expect(screen.getByText(/111.30/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/edit order/i));
  await waitFor(() => {
    expect(outletContextMock).toHaveBeenCalledTimes(1);
  });
  expect(screen.getByText(/mock menu page/i)).toBeInTheDocument();
});
