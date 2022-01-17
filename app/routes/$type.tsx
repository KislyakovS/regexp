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

// Bus
import useContextSearch from '~/bus/search/hooks/use-context-search';

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
  const [search] = useContextSearch();
  const regexps = useLoaderData<Regexp[]>();

  const result = searchRegexp(search, regexps);

  return result.length === 0 ? <Empty /> : <Regexps regexps={result} />
}
