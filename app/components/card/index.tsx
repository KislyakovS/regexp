// Core
import { FC, useState, useCallback, useMemo } from 'react';

// Components
import Input from '../input';
import Tags from '../tags';
import Box from '../box';

// Types
import type { Props } from './types';
import type { ChangeEvent } from 'react';
import type { Tag } from '../tags/types';

// Utils
import { stringToRegexp } from '~/utils';

const Card: FC<Props> = ({ className, title, regexp, example, tags }) => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<Tag[]>([]);
  const pattern = useMemo(() => stringToRegexp(regexp), [regexp]);
  const firstTags = useMemo(() => tags.split(',').slice(0, 3).map(label => ({ label, link: `/${label}` })), [tags]);

  const onChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValue(value);

    if (pattern) {
      const match = value.match(pattern) || [];
      setResult(match.map(label => ({ label })));
    }
  }, [pattern]);

  return (
    <Box className={className}>
      <div className="p-5 border-b-2">
        <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">{title}</span>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <Input defaultValue={regexp} readOnly isCopy={true} className="text-center" />
        <Input placeholder={example} value={value} onChange={onChangeInput} className="text-center" />
        <div>
          {firstTags.length !== 0 && <Tags list={firstTags} />}
          {result.length !== 0 && <Tags className="mt-3" type="primary" list={result} />}
        </div>
      </div>
    </Box>
  )
};

export default Card;