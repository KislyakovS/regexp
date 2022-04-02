// Core
import { FC } from 'react';

// Icons
import getCloseIcon from './assets/close';
import getBurgerIcon from './assets/burger';

// Types
import { IconType } from './constants';
import type { Props } from './types';

const icons = {
  [IconType.CLOSE]: getCloseIcon(),
  [IconType.BURGER]: getBurgerIcon(),
}

const Icon: FC<Props> = ({ type, ...props }) => (
  <span {...props} dangerouslySetInnerHTML={{ __html: icons[type] }} />
);

export default Icon;