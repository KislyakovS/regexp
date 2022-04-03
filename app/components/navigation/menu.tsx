// Core
import { FC, memo } from 'react';
import clsx from 'clsx';

// Components
import { NavLink } from 'remix';

// types
import type { Props, MenuItem } from './types';

const Menu: FC<Props> = ({ className, menu, ...props }) => {
  const menuClasses = clsx(className, 'w-full xl:static left-0 top-20 absolute z-10 xl:flex flex-col xl:flex-row items-center bg-white xl:shadow-none shadow-md xl:rounded-none	rounded-md');

  const createItem = ({ link, label }: MenuItem) => (
    <li key={link}>
      <NavLink to={link} className="block px-10 py-5 hover:bg-gray-100/50 focus-visible:bg-gray-100/50 transition">{label}</NavLink>
    </li>
  );

  return (
    <ul className={menuClasses} {...props}>
      {menu.map(createItem)}
    </ul>
  );
};

export default memo(Menu);
