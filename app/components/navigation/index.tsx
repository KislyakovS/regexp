// Core
import { FC, useState } from 'react';
import clsx from 'clsx';

// Components
import { NavLink } from 'remix';
import Icon from '../icon';

// types
import type { Props, MenuItem } from './types';

import { IconType } from '../icon/constants';

const Navigation: FC<Props> = ({ menu, className, ...props }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navigationClasses = clsx(className, 'flex');
  const listNavigationClasses = clsx(
    'w-full xl:static left-0 top-20 absolute xl:flex flex-col xl:flex-row items-center bg-white xl:shadow-none shadow-md xl:rounded-none	rounded-md',
    {
      'hidden': !isOpenMenu,
    }
  );

  const createItem = ({ link, label }: MenuItem) => {
    return (
      <li key={link}>
        <NavLink to={link} className="block px-10 py-5 hover:bg-gray-100/50 focus-visible:bg-gray-100/50 transition">{label}</NavLink>
      </li>
    );
  };

  const onToggleMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <nav className={navigationClasses} {...props}>
      <button className='xl:hidden' onClick={onToggleMenu} aria-label={isOpenMenu ? 'Закрыть меню' : 'Открыть меню'}>
        {isOpenMenu ? <Icon type={IconType.CLOSE} /> : <Icon type={IconType.BURGER} />}
      </button>
      <ul className={listNavigationClasses}>
        {menu.map(createItem)}
      </ul>
    </nav >
  )
};

export default Navigation;