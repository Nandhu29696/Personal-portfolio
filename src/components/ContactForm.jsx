import { useState } from 'react';
import { ArrowRight } from './ui/Icons';

// Web3Forms keys are public by design: they can only send mail to the owner's inbox.
const WEB3FORMS_KEY = 'f0cdcb20-e70b-4da6-a95f-02342f74b711';

const opportunityTypes = ['Full-time (Canada)', 'Full-time (remote)', 'Contract', 'Other'];

const empty = { name: '', email: '', company: '', opportunity: opportunityTypes[0], message: '' };

export const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) errors.email = 'Please enter your email.';
  else if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (!data.message.trim()) errors.message = 'Please add a short message.';
  return errors;
};

const Field = ({ id, label, error, optional, children }) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
      {label} {optional && <span className="font-normal text-zinc-500 dark:text-zinc-400">(optional)</span>}
    </label>
    {children}
    {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-maple-600 dark:text-maple-400">{error}</p>}
  </div>
);

const ContactForm = () => {
  const [data, setData] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    value: data[name],
    onChange,
    className: `field ${errors[name] ? '!border-maple-500' : ''}`,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ state: 'error', message: 'Please fix the highlighted fields.' });
      return;
    }

    setStatus({ state: 'sending', message: 'Sending…' });
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio: ${data.opportunity} enquiry from ${data.name}`,
          from_name: data.name,
          ...data,
          botcheck: e.target.botcheck.checked,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      setData(empty);
      setStatus({ state: 'success', message: 'Thanks, your message has been sent. I’ll get back to you soon.' });
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again or email me directly.' });
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="card flex flex-col gap-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input type="text" autoComplete="name" {...fieldProps('name')} />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input type="email" autoComplete="email" {...fieldProps('email')} />
        </Field>
        <Field id="company" label="Company" optional>
          <input type="text" autoComplete="organization" {...fieldProps('company')} />
        </Field>
        <Field id="opportunity" label="Opportunity">
          <select {...fieldProps('opportunity')}>
            {opportunityTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </Field>
      </div>
      <Field id="message" label="Message" error={errors.message}>
        <textarea rows="5" placeholder="Role, team and anything else I should know" {...fieldProps('message')} />
      </Field>

      {/* Spam trap: hidden from people, bots tend to tick it. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status.state === 'error'
            ? 'text-maple-600 dark:text-maple-400'
            : status.state === 'success' ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-500'}`}
        >
          {status.message}
        </p>
        <button type="submit" disabled={status.state === 'sending'} className="btn-primary disabled:opacity-60">
          Send message <ArrowRight />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
