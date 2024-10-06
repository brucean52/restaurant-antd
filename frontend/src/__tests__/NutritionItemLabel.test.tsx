import { render, screen } from '@testing-library/react';
import NutritionItemLabel from '../components/NutritionItemLabel';
import { mockNutritionDataArray } from './test-util/mockNutritionData';

test('renders the nutrition item label', async () => {
  render(
    <NutritionItemLabel
      nutriItem={mockNutritionDataArray[1]} 
    />
  );

  
  expect(screen.getByText('Nutrition Facts')).toBeInTheDocument();
  expect(screen.getByText('20g')).toBeInTheDocument();
  expect(screen.getByText('850mg')).toBeInTheDocument();
  expect(screen.getByText('19g')).toBeInTheDocument();
});
