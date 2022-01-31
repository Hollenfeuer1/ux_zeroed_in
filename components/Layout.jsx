import React from 'react';
import { HeaderNav } from './';

const Layout = ({ children }) => {
  return (
  <>
      <HeaderNav />
      {children}
  </>
  )
};

export default Layout;
