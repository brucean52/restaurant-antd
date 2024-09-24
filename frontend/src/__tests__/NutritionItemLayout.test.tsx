import { render, screen } from '@testing-library/react';
import NutritionItemLayout from '../components/NutritionItemLayout';
import { mockNutritionDataArray } from './test-util/mockNutritionData';
import { mockChartData } from './test-util/mockdata';

test('renders the nutrition item layout', async () => {
  render(
    <NutritionItemLayout
      nutriItem={mockNutritionDataArray[1]} 
      chartData={mockChartData}
    />
  );

  expect(screen.getByText('Chili Garlic Green Beans')).toBeInTheDocument();
  expect(screen.getByText('20g')).toBeInTheDocument();
  expect(screen.getByText('850mg')).toBeInTheDocument();
  expect(screen.getByText('19g')).toBeInTheDocument();
});
