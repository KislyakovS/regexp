// Core
import { FC } from 'react';

// Components
import { NavLink } from 'remix';

// types
import type { Props, MenuItem } from './types';

const Navigation: FC<Props> = ({ menu, className, ...props }) => {
  const createItem = ({ link, label }: MenuItem) => {
    return (
      <li key={link}>
        <NavLink to={link} className="block px-10 py-5 hover:bg-gray-100/50 focus-visible:bg-gray-100/50 transition">{label}</NavLink>
      </li>
    );
  }

  return (
    <nav {...props}>
      <ul className="flex items-center">
        {menu.map(createItem)}
      </ul>
    </nav>
  )
};

export default Navigation;