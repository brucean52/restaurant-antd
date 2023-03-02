import { HashRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import AppLayout from '../components/AppLayout';
import { mockContextValues } from '../assets/mockdata';
import { BagContext } from '../BagContext';

test('app layout header render test', async () => {
  render(
    <HashRouter>
      <BagContext.Provider value={mockContextValues}>
        <AppLayout />
      </BagContext.Provider>
    </HashRouter>
  );

  expect(screen.getByText(/menu/i)).toBeInTheDocument();
  expect(screen.getByText('New Chopstix Restaurant ©2023 Created by Bruce An')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText(/6/i)).toBeInTheDocument();
  });
});
