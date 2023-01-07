import React from "react";
import { Image, Text } from "../../atoms";
import itachi from "../../../assets/images/Itachi.jpeg";

export const TestimonialSlider = () => {
  return (
    <>
      <article className="test-cont">
        <div className="test-blurb-bg">
          <div className="test-img-cont">
            <Image src={itachi} alt="itachi" />
          </div>
          <div className="test-txt-cont">
            Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris
            augue neque gravida in fermentum. Praesent semper feugiat nibh sed
            pulvinar proin.{" "}
          </div>
          <Text className="test-h2" type="h2">
            Uchiha Itachi
          </Text>
          <Text className="test-p">Uchiha Clan</Text>
        </div>
        <div className="test-blurb-bg">
          <div className="test-img-cont">
            <Image src={itachi} alt="itachi" />
          </div>
          <div className="test-txt-cont">
            Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris
            augue neque gravida in fermentum. Praesent semper feugiat nibh sed
            pulvinar proin.{" "}
          </div>
          <Text className="test-h2" type="h2">
            Uchiha Itachi
          </Text>
          <Text className="test-p">Uchiha Clan</Text>
        </div>
        <div className="test-blurb-bg">
          <div className="test-img-cont">
            <Image src={itachi} alt="itachi" />
          </div>
          <div className="test-txt-cont">
            Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris
            augue neque gravida in fermentum. Praesent semper feugiat nibh sed
            pulvinar proin.{" "}
          </div>
          <Text className="test-h2" type="h2">
            Uchiha Itachi
          </Text>
          <Text className="test-p">Uchiha Clan</Text>
        </div>
        <div className="test-blurb-bg">
          <div className="test-img-cont">
            <Image src={itachi} alt="itachi" />
          </div>
          <div className="test-txt-cont">
            Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris
            augue neque gravida in fermentum. Praesent semper feugiat nibh sed
            pulvinar proin.{" "}
          </div>
          <Text className="test-h2" type="h2">
            Uchiha Itachi
          </Text>
          <Text className="test-p">Uchiha Clan</Text>
        </div>
      </article>
      <div className="but-test-txt">
        <Text>
          Images from <Text className="thrd-unlne-btn">Freepik</Text>
        </Text>
      </div>
    </>
  );
};
