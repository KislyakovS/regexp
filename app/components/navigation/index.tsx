// Core
import { FC, useCallback } from 'react';
import clsx from 'clsx';

// Components
import { NavLink } from 'remix';

// types
import type { Props, MenuItem } from './types';
import type { LinksFunction } from 'remix';

// Styles
import styles from './styles.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

const Navigation: FC<Props> = ({ menu, className, ...props }) => {
  const navigationClasses = clsx(className, 'navigation');

  const createItem = useCallback(({ link, label }: MenuItem) => {
    return (
      <li key={link}>
        <NavLink to={link} className="navigation__link">{label}</NavLink>
      </li>
    );
  }, [])

  return (
    <nav className={navigationClasses} {...props}>
      <ul className="navigation__list">
        {menu.map(createItem)}
      </ul>
    </nav>
  )
};

export default Navigation;