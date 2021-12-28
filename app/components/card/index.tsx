// Core
import { FC, useState, useCallback, useMemo } from 'react';
import clsx from 'clsx';

// Components
import Input from '../input';
import Tags, { links as tagsLinks } from '../tags';

// Types
import type { Props } from './types';
import type { LinksFunction } from 'remix';
import type { ChangeEvent } from 'react';
import type { Tag } from '../tags/types';

// Utils
import { stringToRegexp } from '~/utils';

// Styles
import styles from './styles.css';

export const links: LinksFunction = () => {
  return [
    ...tagsLinks(),
    { rel: 'stylesheet', href: styles }
  ];
}

const Card: FC<Props> = ({ className, title, regexp, example, tags }) => {
  const cardClasses = clsx(className, 'white-box', 'card');

  const [value, setValue] = useState('');
  const [result, setResult] = useState<Tag[]>([]);
  const pattern = useMemo(() => stringToRegexp(regexp), [regexp]);

  const onChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValue(value);

    if (pattern) {
      const match = value.match(pattern) || [];
      setResult(match.map(label => ({ label })));
    }
  }, [pattern]);

  return <div className={cardClasses}>
    <div className="card__header">
      <span className="card__title">{title}</span>
    </div>
    <div className="card__body">
      <Input defaultValue={regexp} readOnly isCopy={true} className="card__input" />
      <Input placeholder={example} value={value} onChange={onChangeInput} className="card__input" />
      <div>
        {result.length !== 0 && <Tags type="primary" list={result} />}
      </div>
    </div>
  </div>
};

export default Card;