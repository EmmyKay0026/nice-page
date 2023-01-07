import React from "react";
import { Button, Input } from "../../atoms";

export const EmailUs = () => {
  return (
    <div>
      <Input
        className="cont-input"
        label="name"
        placeholder="Enter your Name"
      />
      <Input
        className="cont-input"
        label="email"
        type="email"
        placeholder="Enter a valid email address"
      />
      <textarea
        label="message"
        placeholder="Enter your message"
        className="cont-input txtarea"
      />
      <Button className="cont-btn" children="SUBMIT" />
    </div>
  );
};
