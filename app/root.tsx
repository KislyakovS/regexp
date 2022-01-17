// Core
import {
  Links,
  Outlet,
  LiveReload,
  Scripts,
  ScrollRestoration,
} from "remix";
import { FC, ReactNode } from 'react';
import type { LinksFunction } from "remix";

// Components
import Header, { links as headerLinks } from './components/header';
import NotFound from './components/not-found';
import { links as cardLinks } from './components/card';

// Bus
import SearchContext from './bus/search/context';
import useSearch from './bus/search/hooks/use-search';

// Styles
import globalStyles from './styles/global.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap' },
    { rel: 'stylesheet', href: globalStyles },
    ...headerLinks(),
    ...cardLinks(),
  ];
}

interface Props {
  title: string;
  children: ReactNode;
}

const Document: FC<Props> = ({ title, children }) => {
  const [search, onChangeSearch] = useSearch();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        <div className="container">
          <SearchContext.Provider value={[search, onChangeSearch]}>
            <Header />
            <main>
              {children}
            </main>
          </SearchContext.Provider>
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export const CatchBoundary: FC = () => {
  return (
    <Document title="Whoops!">
      <NotFound />
    </Document>
  )
}

const App: FC = () => (
  <Document title="Regexp - Pattern">
    <Outlet />
  </Document>
);

export default App;
