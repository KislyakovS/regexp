// Core
import { FC } from 'react';
import clsx from 'clsx';

// Components
import { Link } from 'remix';

// Types
import type { Props, Tag } from './types';

// Utils
import { types } from './constants';

const Tags: FC<Props> = ({ className, type = types.default, list, ...props }) => {
  const tagsClasses = clsx(className, 'flex gap-1');
  const linkClasses = clsx(
    'block p-3 text-center no-underline rounded-md transition',
    type === types.primary ? 'bg-red' : 'bg-gray-100 hover:bg-gray-200 focus-visible:bg-gray-200'
  )

  const createItem = ({ label, link }: Tag) => {
    return (
      <li key={label} className="flex-1">
        {link ? <Link to={link} className={linkClasses}>{label}</Link> : <span className={linkClasses}>{label}</span>}
      </li>
    )
  }

  return (
    <ul className={tagsClasses} {...props}>
      {list.map(createItem)}
    </ul>
  )
};

export default Tags;