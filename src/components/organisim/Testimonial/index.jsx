import React from "react";
import { Text } from "../../atoms";
import { TestimonialSlider } from "../../molecules";

export const Testimonial = () => {
  return (
    <section>
      <div className="testi-div">
        <Text children="TESTIMONIALS" />
        <Text type="h2" children="What Clients Say" />
        <Text type="p">
          We place huge value on strong relationships and have seen the benefit
          they bring to our business. Customer feedback is vital in helping us
          to get it right.
        </Text>
      </div>
      <TestimonialSlider />
    </section>
  );
};
