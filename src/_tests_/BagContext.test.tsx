import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderContextTestComponent from './util/RenderContextTestComponent';
import BagProvider from '../BagContext';

describe('Bag Context Tests', () => {
  test('bag context add/edit test', () => {
    render(
      <BagProvider>
        <RenderContextTestComponent />
      </BagProvider>
    );

    expect(within(screen.getByLabelText('subtotal-txt')).getByText('0.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('tax-txt')).getByText('0.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-txt')).getByText('0.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-items')).getByText('0')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('add-btn-item1'));
    expect(within(screen.getByLabelText('subtotal-txt')).getByText('48.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('tax-txt')).getByText('5.16')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-txt')).getByText('53.16')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-items')).getByText('3')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('edit-btn-item1'));
    expect(within(screen.getByLabelText('subtotal-txt')).getByText('32.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('tax-txt')).getByText('3.44')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-txt')).getByText('35.44')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-items')).getByText('2')).toBeInTheDocument();
  });

  test('bag context add/delete test', () => {
    render(
      <BagProvider>
        <RenderContextTestComponent />
      </BagProvider>
    );
    expect(within(screen.getByLabelText('subtotal-txt')).getByText('0.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('tax-txt')).getByText('0.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-txt')).getByText('0.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-items')).getByText('0')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('add-btn-item2'));
    expect(within(screen.getByLabelText('subtotal-txt')).getByText('29.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('tax-txt')).getByText('3.12')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-txt')).getByText('32.12')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-items')).getByText('2')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('delete-btn-item2'));
    expect(within(screen.getByLabelText('subtotal-txt')).getByText('0.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('tax-txt')).getByText('0.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-txt')).getByText('0.00')).toBeInTheDocument();
    expect(within(screen.getByLabelText('total-items')).getByText('0')).toBeInTheDocument();
  });

});

