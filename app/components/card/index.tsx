// Core
import { FC } from 'react';
import clsx from 'clsx';

// Components
import Input from '../input';
import Tags, { links as tagsLinks } from '../tags';

// Types
import type { Props } from './types';
import type { LinksFunction } from 'remix';

// Styles
import styles from './styles.css';

export const links: LinksFunction = () => {
  return [
    ...tagsLinks(),
    { rel: 'stylesheet', href: styles }
  ];
}

const Card: FC<Props> = ({ className, title }) => {
  const cardClasses = clsx(className, 'white-box', 'card')

  return <div className={cardClasses}>
    <div className="card__header">
      <span className="card__title">{title}</span>
    </div>
    <div className="card__body">
      <Input defaultValue="([^ !$`&*()+]|(\[ !$`&*()+]))+" readOnly className="card__input" />
      <Input placeholder="/usr/lib/libgccpp.so" className="card__input" />
      <div>
        <Tags
          type="default"
          list={[{ link: "/unix", label: "unix" }, { link: "/unix", label: "path" }, { link: "/unix", label: "directory" }]}
        />
        <Tags
          className="card__tags"
          type="primary"
          list={[{ label: "q" }, { label: "wewqeq" }]}
        />
      </div>
    </div>
  </div>
};

export default Card;