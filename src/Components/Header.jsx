import React from "react";

import FeatureBox from "./FeatureBox";
import belong1 from "../images/belong1.png";
import ffffff from "../images/ffffff.jpg";

function Header() {
  return (
    <div>
      <div id="features">
        <div className="a-container">
          <FeatureBox image={belong1} title="Kaizen Platform" />
          <FeatureBox image={ffffff} title="Knowledge Platform" />
        </div>
      </div>
    </div>
  );
}

export default Header;
