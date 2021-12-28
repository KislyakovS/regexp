// Core
import { forwardRef, useCallback, MouseEvent } from 'react';
import clsx from 'clsx';

// Types
import type { Props } from './types';

const Input = forwardRef<HTMLInputElement, Props>(({ className, isCopy, ...props }, ref) => {
  const inputClasses = clsx(className, 'input', isCopy && 'input--pointer');

  const onClickCopy = useCallback((event: MouseEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement
    navigator.clipboard.writeText(value);

    if (props.onClick) {
      props.onClick(event);
    }

  }, [])

  return <input
    {...props}
    className={inputClasses}
    ref={ref}
    onClick={isCopy ? onClickCopy : undefined}
  />;
});

export default Input;
