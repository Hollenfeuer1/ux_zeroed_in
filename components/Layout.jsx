import React from 'react';
import { HeaderNav } from './';
import { GreyNav } from './';
import { AboutUs } from './';
import { ContactFooter } from './';

const Layout = ({ children }) => {
  return (
  <>
      <HeaderNav />
      <GreyNav />
      {children}
  </>
  )
};

export default Layout;
