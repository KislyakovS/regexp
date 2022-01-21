// Core
import { FC } from 'react';

// Components
import Card from '../card';

// Types 
import type { Props } from './types';

const Regexps: FC<Props> = ({ regexps }) => {
  return (
    <ul className="grid grid-cols-3 gap-7">
      {regexps.map(({ title, regexp, example, tags }) => (
        <li key={regexp}>
          <Card
            title={title}
            regexp={regexp}
            example={example}
            tags={tags}
          />
        </li>
      ))}
    </ul>
  )
};

export default Regexps;