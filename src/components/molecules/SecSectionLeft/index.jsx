import React from "react";
import { Text, Button } from "../../atoms";

export const SecSectionLeft = () => {
  return (
    <div className="d-none-mob">
      <Text type="h2" className="cta-h2-txt">
        Hosting solution with benefits.
      </Text>
      <Text type="p" className="cta-p-txt">
        Turn your ideas into reality with Static.
      </Text>
      <Text type="p" className="cta-p-txt">
        With a lot of powerful features, we guarantee simplicity and clarity.
      </Text>
      <div className="btn-cont">
        <Button className="cta-green-btn">read more</Button>
      </div>
    </div>
  );
};
