import React from "react";
import { Image, Text, Button } from "../../atoms";
import sect3Image from "../../../assets/images/uuu.png";
// import { Link } from "react-router-dom";

export const ThrdSection = () => {
  return (
    <>
      <section className="thrd-sec">
        <div className="thrd-sec-div"></div>
        <div className="thrd-sec-div"></div>
        <div className="thrd-sec-div"></div>
      </section>
      <div className="relative-cont">
        <div className="img-cont">
          <Image src={sect3Image} alt="workflow" />
        </div>
        <div className="crc-div"></div>
        <span className="thrd-txt-bg">
          <Text type="h2" className="thrd-h2-txt">
            Create Amazing Website
          </Text>
          <Text type="p" className="thrd-p-txt">
            Quis viverra nibh cras pulvinar mattis nunc sed. Lacus sed turpis
            tincidunt id aliquet risus feugiat in. Auctor augue mauris augue
            neque gravida in fermentum et. Feugiat in fermentum{" "}
            <Text className="thrd-unlne-btn"> posuere</Text> urna.
          </Text>
          <Text type="p" className="thrd-p-txt">
            Image from <Text className="thrd-unlne-btn">Freepik</Text>
          </Text>
          <div className="thrd-btn-cont">
            <Button className="cta-green-btn">learn more</Button>
          </div>
        </span>
      </div>
    </>
  );
};
