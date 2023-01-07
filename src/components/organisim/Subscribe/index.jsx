import React from "react";
import { Text } from "../../atoms";
import { SubOffers } from "../../molecules";

export const Subscribe = () => {
  return (
    <section className="sub-sec">
      <div>
        <Text className="hero-h1-txt" type="h2">
          Purchase
        </Text>
        <div className="sub-txt">
          <div className="sub-p-txt">
            <Text type="p">
              Start using static.app as a hosting for your websites today to get
              the best features to buck ratio on the market.
            </Text>
          </div>
          <div>
            <ul>
              <li>Unlimited Pages</li>
              <li>Unlimited Pages</li>
              <li>Unlimited Pages</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Unlimited Pages</li>
              <li>Unlimited Pages</li>
              <li>Unlimited Pages</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub-offers">
        <SubOffers
          pChildren="Starter Plan"
          h2Children="Free"
          btnChildren="Upload for Free"
          spanChildren1="Free static.app domain included."
          spanChildren2="No credit card."
          type="green"
        />
        <SubOffers
          pChildren="Yearly Plan"
          h2Children="$9/month"
          btnChildren="Proceed Annually"
          saveBtn="SAVE 25%"
          spanChildren1="Billed $108 per website annually."
          spanChildren2="$36 cheaper to this way."
          type="white"
        />
        <SubOffers
          pChildren="Monthly Plan"
          h2Children="$12/month"
          btnChildren="Proceed Monthly"
          spanChildren1="Billed $12 per website monthly."
          spanChildren2="Total is $144 per year."
          type="white"
        />
      </div>
    </section>
  );
};
