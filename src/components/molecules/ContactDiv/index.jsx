import React from "react";
import { Text } from "../../atoms";
import { EmailUs } from "../EmailUs";

export const ContactDiv = () => {
  return (
    <div className="cont-div">
      <article>
        <Text className="cont-h2-txt" type="h2">
          Contact Info
        </Text>
        <div>
          <Text className="cont-infos btn"> +1 (234) 567-8910</Text>
          <Text className="cont-infos btn" type="p">
            {" "}
            contact@yourmail.com
          </Text>
          <address> 203, Envato Labs, Behind Alis Steet, Australia</address>
          <div className="soc-ic-cont">
            <span>fbicn</span>
            <span>twicn</span>
            <span>igicn</span>
            <span>yticn</span>
          </div>
        </div>
      </article>
      <div>
        <EmailUs />
      </div>
    </div>
  );
};
