import { render, screen, renderHook, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import MenuRadioOptions from '../components/MenuRadioOptions';
import { riceOptions } from './test-util/mockMenuData';
import { defaultMenuItemFormValues } from '../assets/defaultData';
import { MenuItemFormValues } from '../types';

test('renders rice bowl radio options and can click them', async () => {
  const { result } = renderHook(()=>useForm<MenuItemFormValues>({
    defaultValues: defaultMenuItemFormValues
  }));

  render(
    <MenuRadioOptions
      type="bowl"
      title="Rice Choice"
      errors={result.current.formState.errors}
      options={riceOptions}
      control={result.current.control}
    />
  );

  expect(screen.getByText('White Rice')).toBeInTheDocument();
  expect(screen.getByText('Brown Rice $0.50')).toBeInTheDocument();
  expect(screen.getByText('Fried Rice $2.00')).toBeInTheDocument();

  userEvent.click(screen.getByLabelText('white-rice-radio'));
  await waitFor(() => {
    expect(screen.getByLabelText('white-rice-radio')).toBeChecked();
  });
  expect(screen.getByLabelText('brown-rice-radio')).not.toBeChecked();
  expect(screen.getByLabelText('fried-rice-radio')).not.toBeChecked();
  
  userEvent.click(screen.getByLabelText('brown-rice-radio'));
  await waitFor(() => {
    expect(screen.getByLabelText('brown-rice-radio')).toBeChecked();
  });
  expect(screen.getByLabelText('white-rice-radio')).not.toBeChecked();
  expect(screen.getByLabelText('fried-rice-radio')).not.toBeChecked();
});