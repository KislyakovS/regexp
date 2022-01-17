// Types
import type Regexp from '~/types/regexp';

const searchRegexp = (search: string, list: Regexp[]): Regexp[] => {
  return list.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));
}

export default searchRegexp;