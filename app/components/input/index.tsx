// Core
import { forwardRef } from 'react';
import clsx from 'clsx';

// Types
import type { Props } from './types';

const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => {
  const inputClasses = clsx(className, 'input');

  return <input className={inputClasses} ref={ref} {...props} />;
});

export default Input;
