// Core
import { FC } from 'react';

// Components
import Card from '../card';

// Types
import type { Props } from './types';

const Regexps: FC<Props> = ({ regexps }) => {
  return (
    <ul className="grid gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
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