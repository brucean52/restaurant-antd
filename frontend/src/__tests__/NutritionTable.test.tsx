import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NutritionTable from '../components/NutritionTable';
import { mockNutritionDataArray } from './test-util/mockNutritionData';

test('renders the nutrition table', async () => {
  render(
    <NutritionTable
      nutritionDataArray={mockNutritionDataArray}
    />
  );

  expect(screen.getByText('Chicken Lettuce Wraps')).toBeInTheDocument();
  expect(screen.getByText('Sugar')).toBeInTheDocument();
  expect(screen.getByText('Carbs')).toBeInTheDocument();
  expect(screen.getByText('Protein')).toBeInTheDocument();
});

test('click the expand icon and then click the close expanded icon', async () => {
  render(
    <NutritionTable
      nutritionDataArray={mockNutritionDataArray}
    />
  );
  expect(screen.getByText('Chicken Lettuce Wraps')).toBeInTheDocument();

  userEvent.click(screen.getByLabelText('expand-icon-chicken-lettuce-wraps'));
  await waitFor(() => {
    expect(screen.getByLabelText('close-expanded-icon-chicken-lettuce-wraps')).toBeInTheDocument();
  });
  expect(screen.queryByLabelText('expand-icon-chicken-lettuce-wraps')).not.toBeInTheDocument();

  userEvent.click(screen.getByLabelText('close-expanded-icon-chicken-lettuce-wraps'));
  await waitFor(() => {
    expect(screen.getByLabelText('expand-icon-chicken-lettuce-wraps')).toBeInTheDocument();
  });
  expect(screen.queryByLabelText('close-expanded-icon-chicken-lettuce-wraps')).not.toBeInTheDocument();
});