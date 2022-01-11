// Core
import { FC } from 'react';
import clsx from 'clsx';

// Components
import { Link } from 'remix';

// Types
import type { Props, Tag } from './types';
import type { LinksFunction } from 'remix';

// Utils
import { types } from './constants';

// Styles
import styles from './styles.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
}

const Tags: FC<Props> = ({ className, type = types.default, list, ...props }) => {
  const tagsClasses = clsx(className, 'tags', type === types.primary && 'tags--primary');

  const createItem = ({ label, link }: Tag) => {
    return (
      <li key={label}>
        {link ? <Link to={link} className="tags__link">{label}</Link> : <span className="tags__link">{label}</span>}
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