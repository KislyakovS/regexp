// Core
import { FC } from 'react';

// Components
import Box, { links as boxLinks } from '../box';
import Navigation, { links as navigationLinks } from '../navigation';
import Input from '../input';

// Types
import type { LinksFunction } from 'remix';

// Styles
import styles from './styles.css';

export const links: LinksFunction = () => {
  return [
    ...boxLinks(),
    ...navigationLinks(),
    { rel: 'stylesheet', href: styles }
  ];
}

const Header: FC = () => {
  return (
    <header className="header">
      <Box className="header__wrapper">
        <Navigation
          menu={[
            {
              link: '/',
              label: 'Home',
            }
          ]}
        />
        <Input placeholder="Search..." />
      </Box>
    </header>
  );
};

export default Header;
