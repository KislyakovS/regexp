// Core
import { FC, useCallback } from 'react';
import clsx from 'clsx';

// Components
import { Link } from 'remix';

// Types
import type { Props } from './types';
import type { LinksFunction } from 'remix';

// Utils
import { types } from './constants';

// Styles
import styles from './styles.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
}

const Tags: FC<Props> = ({ className, type = types.default, list }) => {
  const tagsClasses = clsx(className, 'tags', type === types.primary && 'tags--primary');

  const createItem = useCallback(({ label, link }) => {
    return (
      <li key={label}>
        {link ? <Link to={link} className="tags__link">{label}</Link> : <span className="tags__link">{label}</span>}
      </li>
    )
  }, [])

  return (
    <ul className={tagsClasses}>
      {list.map(createItem)}
    </ul>
  )
};

export default Tags;