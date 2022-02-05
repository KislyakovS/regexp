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
import Header from './components/header';
import NotFound from './components/not-found';

// Context
import SearchContextProvider from './context/search/provider';

// Styles
import tailwind from './tailwind.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap' },
    { rel: 'stylesheet', href: tailwind },
  ];
}

interface Props {
  title: string;
  children: ReactNode;
}

const Document: FC<Props> = ({ title, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <Links />
      </head>
      <body className="bg-gray-500 font-main">
        <div className="max-w-screen-xl mx-auto px-4 py-7">
          <SearchContextProvider>
            <Header />
            <main>
              {children}
            </main>
          </SearchContextProvider>
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
