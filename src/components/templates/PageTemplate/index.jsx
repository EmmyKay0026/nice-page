import React from "react";
import { Footer } from "../../molecules";
import { NavBar } from "../../molecules";

export const PageTemplate = ({ header, footer, children }) => {
  return (
    <>
      {!header ? <NavBar /> : header}
      <main>{children}</main>
      {!footer ? <Footer /> : footer}
    </>
  );
};
