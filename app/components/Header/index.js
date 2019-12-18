import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/buttons">
          <FormattedMessage {...messages.buttons} />
        </HeaderLink>
        <HeaderLink to="/panels">
          <FormattedMessage {...messages.panels} />
        </HeaderLink>
        <HeaderLink to="/datatable">
          <FormattedMessage {...messages.datatable} />
        </HeaderLink>
        <HeaderLink to="/notFound">
          <FormattedMessage {...messages.notFound} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
