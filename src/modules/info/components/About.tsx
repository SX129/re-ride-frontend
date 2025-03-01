import React from "react";
import MapBox from "../../../shared/components/MapBox";

const About = () => {
  return (
    <div className="about-content border-2 border-red-500">
      <div className="about-left-content">
        <div className="about-block">
          <p>01.</p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Sem rhoncus
            tempus lacinia finibus vitae et. Per mauris molestie integer nibh;
            justo erat fermentum. Eu erat iaculis vestibulum feugiat mi integer
            fames libero primis. Dis luctus aptent at litora ligula nec dui
            parturient.
          </p>
        </div>

        <div className="about-block">
          <p>02.</p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Sem rhoncus
            tempus lacinia finibus vitae et. Per mauris molestie integer nibh;
            justo erat fermentum. Eu erat iaculis vestibulum feugiat mi integer
            fames libero primis. Dis luctus aptent at litora ligula nec dui
            parturient.
          </p>
        </div>
        <div className="about-block">
          <p>03.</p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Sem rhoncus
            tempus lacinia finibus vitae et. Per mauris molestie integer nibh;
            justo erat fermentum. Eu erat iaculis vestibulum feugiat mi integer
            fames libero primis. Dis luctus aptent at litora ligula nec dui
            parturient.
          </p>
        </div>
      </div>
      <div className="about-right-content">
        <MapBox
          width="600px"
          height="600px"
          style="mapbox://styles/syphe/cln1c2ymv06gc01qb2j6q8a24"
        />
      </div>
    </div>
  );
};

export default About;
