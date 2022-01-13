// Core
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div className="not-found">
      <h5 className="not-found__code">404</h5>
      <h2 className="not-found__message">Whoops! This is not what you were looking for</h2>
    </div>
  )
};

export default NotFound;