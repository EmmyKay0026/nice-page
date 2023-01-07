import React from "react";
import {
  HeroSection,
  SecSection,
  Testimonial,
  Subscribe,
  ContactSec,
} from "../../organisim";
import { PageTemplate } from "../../templates";

export const NicePage = () => {
  return (
    <PageTemplate>
      <HeroSection />
      <SecSection />
      <Testimonial />
      <Subscribe />
      <ContactSec />
    </PageTemplate>
  );
};
