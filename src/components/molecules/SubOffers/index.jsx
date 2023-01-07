import React from "react";
import { Button, Text } from "../../atoms";

export const SubOffers = ({
  type,
  pChildren,
  h2Children,
  btnChildren,
  saveBtn,
  spanChildren1,
  spanChildren2,
}) => {
  if (type === "green") {
    return (
      <div className="green-cta-bg">
        <div className="d-flex">
          <Text className="cta-p" type="p">
            {pChildren}
          </Text>
        </div>
        <Text className="cta-h2" type="h2">
          {h2Children}
        </Text>
        <Button className="cta-btn">{btnChildren}</Button>
        <Text className="cta-span">
          {spanChildren1} <br />
          {spanChildren2}
        </Text>
      </div>
    );
  }
  return (
    <div className="white-cta-bg">
      <div className="d-flex">
        <Text className="cta-p" type="p">
          {pChildren}
        </Text>
        <Button className="sub-save">{saveBtn}</Button>
      </div>
      <Text className="cta-h2" type="h2">
        {h2Children}
      </Text>
      <Button className="cta-btn">{btnChildren}</Button>
      <Text className="cta-span">
        {spanChildren1} <br />
        {spanChildren2}
      </Text>
    </div>
  );
};
