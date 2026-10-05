import { fireEvent, render, screen } from '@testing-library/react';
import ContactForm, { validate } from './ContactForm';

const valid = { name: 'Alex', email: 'alex@example.ca', message: 'We are hiring.' };

describe('validate', () => {
  test('accepts a complete form', () => {
    expect(validate(valid)).toEqual({});
  });

  test('requires name, email and message', () => {
    expect(Object.keys(validate({ name: ' ', email: '', message: '' }))).toEqual(['name', 'email', 'message']);
  });

  test('rejects a malformed email', () => {
    expect(validate({ ...valid, email: 'alex@example' }).email).toMatch(/valid email/);
  });
});

test('shows field errors instead of sending an empty form', () => {
  global.fetch = vi.fn();
  render(<ContactForm />);

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  expect(screen.getByText('Please enter your name.')).toBeInTheDocument();
  expect(screen.getByLabelText(/^email/i)).toHaveAttribute('aria-invalid', 'true');
  expect(global.fetch).not.toHaveBeenCalled();
});
