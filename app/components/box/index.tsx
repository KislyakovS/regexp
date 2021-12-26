// Core
import { forwardRef } from 'react';
import clsx from 'clsx';

// Types
import type { LinksFunction } from 'remix';
import type { Props } from './types';

// Styles
import styles from './styles.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

const Box = forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
  const boxClasses = clsx('white-box', className)

  return (
    <div ref={ref} className={boxClasses} {...props}>
      {children}
    </div>
  )
});

export default Box;