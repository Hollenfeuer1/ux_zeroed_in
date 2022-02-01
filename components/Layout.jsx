import React from 'react';
import { HeaderNav } from './';
import { GreyNav } from './';

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
