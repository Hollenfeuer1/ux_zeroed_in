import React from 'react';
import { HeaderNav } from '.';
import { GreyNav } from '.';
import { AboutUs } from '.';
import { ContactFooter } from '.';
import Script from 'next/script';

const Layout = ({ children }) => {
  return (
  <>
      <HeaderNav />
      <GreyNav />
      <main>{children}</main>
      <ContactFooter />
      <Script src='https://drive.google.com/file/d/1-YmwcIM3TEbMgVOq4Q9enRcs2jw7Z0gQ/' />
  </>
  )
};

export default Layout;
