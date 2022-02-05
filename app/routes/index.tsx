// Components
import Regexps from '~/components/regexps';
import Empty from '~/components/empty';

// Assets
import regexps from '~/assets/regexp.json';

// Context
import useSearchState from '~/context/search/hooks/use-search-state';

// Utils
import { searchRegexp } from '~/utils';

export default () => {
  const search = useSearchState();

  const result = searchRegexp(search, regexps);

  return result.length === 0 ? <Empty /> : <Regexps regexps={result} />
}
