// Core
import { useLoaderData } from 'remix';

// Components
import Regexps from '../components/regexps';
import Empty from '../components/empty';

// Types
import type { LoaderFunction } from 'remix';

// Assets
import regexps from '~/assets/regexp.json';

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
  const regexps = useLoaderData();

  return regexps.length === 0 ? <Empty /> : <Regexps regexps={regexps} />
}
