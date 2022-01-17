// Components
import Regexps from '~/components/regexps';
import Empty from '~/components/empty';

// Assets
import regexps from '~/assets/regexp.json';

// Bus
import useContextSearch from '~/bus/search/hooks/use-context-search';

// Utils
import { searchRegexp } from '~/utils';

export default () => {
  const [search] = useContextSearch();

  const result = searchRegexp(search, regexps);

  return result.length === 0 ? <Empty /> : <Regexps regexps={result} />
}
