const regexp = new RegExp('^/(.*?)/([gimy]*)$');

const stringToRegexp = (str: string): RegExp | null => {
  const match = str.match(regexp);

  if (match) {
    return new RegExp(match[1], match[2]);
  }

  return null;
}

export default stringToRegexp;