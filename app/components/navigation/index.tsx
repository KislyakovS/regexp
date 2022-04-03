// Core
import { FC, useState } from 'react';
import clsx from 'clsx';

// Components
import Icon from '../icon';
import Menu from './menu';

// types
import type { Props } from './types';

import { IconType } from '../icon/constants';

const Navigation: FC<Props> = ({ menu, className, ...props }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navigationClasses = clsx(className, 'flex');
  const wrapperMenuClasses = clsx('xl:block', { 'hidden': !isOpenMenu });

  const onToggleMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <nav className={navigationClasses} {...props}>
      <button className='xl:hidden' onClick={onToggleMenu} aria-label={isOpenMenu ? 'Закрыть меню' : 'Открыть меню'}>
        {isOpenMenu ? <Icon type={IconType.CLOSE} /> : <Icon type={IconType.BURGER} />}
      </button>
      <div className={wrapperMenuClasses}>
        <Menu menu={menu} />
      </div>
    </nav >
  )
};

export default Navigation;