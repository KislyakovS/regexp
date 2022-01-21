// Core
import { forwardRef } from 'react';
import clsx from 'clsx';

// Types
import type { Props } from './types';

const Box = forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
  const boxClasses = clsx(className, 'bg-white shadow-md rounded-md');

  return (
    <div ref={ref} className={boxClasses} {...props}>
      {children}
    </div>
  )
});

export default Box;