// Core
import { FC } from 'react';
import clsx from 'clsx';

// Components
import { Link } from 'remix';

// Types
import type { Props, Tag } from './types';

// Utils
import { TagType } from './constants';

const Tags: FC<Props> = ({ className, type = TagType.DEFAULT, list, ...props }) => {
  const tagsClasses = clsx(className, 'flex gap-2');
  const linkClasses = clsx(
    'block p-2 text-center no-underline rounded-md transition',
    type === TagType.PRIMARY ? 'bg-red' : 'bg-gray-100 hover:bg-gray-200 focus-visible:bg-gray-200'
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