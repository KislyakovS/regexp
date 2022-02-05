// Core
import { useLoaderData } from 'remix';

// Components
import Regexps from '~/components/regexps';
import Empty from '~/components/empty';

// Types
import type { LoaderFunction } from 'remix';
import type Regexp from '~/types/regexp';

// Assets
import regexps from '~/assets/regexp.json';

// Context
import useSearchState from '~/context/search/hooks/use-search-state';

// Utils
import { searchRegexp } from '~/utils';

export const loader: LoaderFunction = ({ params }) => {
  const { type } = params;

  if (type) {
    const filteredRegexp = regexps.filter(({ tags }) => {
      return tags.split(',').includes(type);
    });

    return filteredRegexp;
  }

  return [];
}

export default () => {
  const search = useSearchState();
  const regexps = useLoaderData<Regexp[]>();

  const result = searchRegexp(search, regexps);

  return result.length === 0 ? <Empty /> : <Regexps regexps={result} />
}
