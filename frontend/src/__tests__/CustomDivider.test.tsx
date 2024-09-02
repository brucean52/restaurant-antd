import { render, screen } from '@testing-library/react';
import CustomDivider from '../components/CustomDivider';
import { mockContextValues, mockEmptyContextValues } from '../test-util/mockdata';
import { BagContext } from '../BagContext';

test('custom divider dark mode', async () => {

  render(
    <BagContext.Provider value={mockContextValues}>
      <CustomDivider/>
    </BagContext.Provider>
  );

  expect(screen.getByLabelText('divider')).toHaveStyle({ 'border-block-start': '1px solid rgba(250, 250, 250, 0.12)' });
});

test('custom divider light mode', async () => {

  render(
    <BagContext.Provider value={mockEmptyContextValues}>
      <CustomDivider/>
    </BagContext.Provider>
  );

  expect(screen.getByLabelText('divider')).toHaveStyle({ 'border-block-start': '1px solid rgba(5, 5, 5, 0.12)' });
});

test('custom divider with style prop', async () => {

  render(
    <BagContext.Provider value={mockContextValues}>
      <CustomDivider style={{ margin: '10px' }}/>
    </BagContext.Provider>
  );

  expect(screen.getByLabelText('divider')).toHaveStyle({ 'margin': '10px' });
});