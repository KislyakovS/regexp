// Core
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";

// Components
import Header, { links as headerLinks } from './components/header';
import { links as cardLinks } from './components/card';

// Styles
import globalStyles from './styles/global.css';

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

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

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="container">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
