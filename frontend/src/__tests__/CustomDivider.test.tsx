import { render, screen } from '@testing-library/react';
import CustomDivider from '../components/CustomDivider';
import { mockAppStateValues, mockEmptyAppStateValues } from './test-util/mockdata';
import { useAppStore } from '../store/UseAppStore';

test('custom divider dark mode', async () => {
  useAppStore.setState(mockAppStateValues);
  render(<CustomDivider/>);

  expect(screen.getByLabelText('divider')).toHaveStyle({ 'border-block-start': '1px solid rgba(250, 250, 250, 0.12)' });
});

test('custom divider light mode', async () => {
  useAppStore.setState(mockEmptyAppStateValues);
  render(<CustomDivider/>);

  expect(screen.getByLabelText('divider')).toHaveStyle({ 'border-block-start': '1px solid rgba(5, 5, 5, 0.12)' });
});

test('custom divider with style prop', async () => {
  render(<CustomDivider style={{ margin: '10px' }}/>);

  expect(screen.getByLabelText('divider')).toHaveStyle({ 'margin': '10px' });
});