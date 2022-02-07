import React from 'react';
import { HeaderNav } from '.';
import { GreyNav } from '.';
import { AboutUs } from '.';
import { ContactFooter } from '.';

const Layout = ({ children }) => {
  return (
  <>
      <HeaderNav />
      <GreyNav />
      <main>{children}</main>
      <ContactFooter />
  </>
  )
};

export default Layout;
