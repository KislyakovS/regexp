// Core
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h5 className="text-gray-900 text-lg font-medium">404</h5>
      <h2 className="mt-1 text-5xl font-bold">Whoops! This is not what you were looking for</h2>
    </div>
  )
};

export default NotFound;