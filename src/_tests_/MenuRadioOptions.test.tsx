import { render, screen, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import MenuRadioOptions from '../components/MenuRadioOptions';
import { bowlOptions } from '../assets/menuData';
import { defaultMenuItemFormValues } from '../assets/defaultData';
import { MenuItemFormValues } from '../types';

test('renders rice bowl radio options and can click them', () => {
  const { result } = renderHook(()=>useForm<MenuItemFormValues>({
    defaultValues: defaultMenuItemFormValues
  }));

  render(
    <MenuRadioOptions
      type="bowl"
      title="Rice Choice"
      errors={result.current.formState.errors}
      options={bowlOptions}
      control={result.current.control}
    />
  );

  expect(screen.getByText('White Rice')).toBeInTheDocument();
  expect(screen.getByText('Brown Rice')).toBeInTheDocument();
  expect(screen.getByText('1/2 White 1/2 Brown')).toBeInTheDocument();
  userEvent.click(screen.getByLabelText('white-rice-radio'));
  expect(screen.getByLabelText('white-rice-radio')).toBeChecked();
  expect(screen.getByLabelText('brown-rice-radio')).not.toBeChecked();
  expect(screen.getByLabelText('half-rice-radio')).not.toBeChecked();
  userEvent.click(screen.getByLabelText('brown-rice-radio'));
  expect(screen.getByLabelText('brown-rice-radio')).toBeChecked();
  expect(screen.getByLabelText('white-rice-radio')).not.toBeChecked();
  expect(screen.getByLabelText('half-rice-radio')).not.toBeChecked();
});