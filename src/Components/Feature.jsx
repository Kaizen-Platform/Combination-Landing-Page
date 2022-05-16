import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";

function Feature() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={featureimage} title="Kaizen Platform" />
        <FeatureBox image={featureimage1} title="Knowledge Platform" />
      </div>
    </div>
  );
}

export default Feature;
