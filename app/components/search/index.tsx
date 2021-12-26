// Core
import { forwardRef } from 'react';
import clsx from 'clsx';

// Types
import type { LinksFunction } from 'remix';
import type { Props } from './types';

// Styles
import styles from './styles.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles }
  ]
}

const Search = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => {
  const searchClass = clsx('search', className);

  return (
    <input className={searchClass} type='search' placeholder="Search..." ref={ref} {...props} />
  )
});

export default Search;