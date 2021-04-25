import React, { useState } from "react";
import useScreenSize from "./useScreenSize";
import calculate from "../images/calculate.png";
import visualize from "../images/visualize.png";
import compensate from "../images/compensate.png";


function MarineOffsetLanding(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false)
    return (
      <>
        {screenSize === "xs" || screenSize === "sm" ? (
        <div>
              <p className="marineM">MARINE <br/>OFFSET <br/>PLATFORM (MOP)</p> <br />
            <p className="smallRobotoM">
            designed by shipping professionals for the maritime transportation industry.
            </p>
            <br />
            <div className="flex flex-col">
              <div className='gregcenter'>
                <img className="calculateIcon" src={calculate} />
                <p className="smallerTitles">CALCULATE</p>
                <p className="smallRoboto">
                Your ship's emissions across fuel types (fuel oils, distillates, bio-fuels, LNG, ammonia, methanol)
                </p>
              </div>
              <div>
                <img className="visualizeIcon" src={visualize} />
                <p className="smallerTitles"> VISUALIZE</p>
                <p className="smallRoboto">
                  The different voyages, vessels and cargoes your fleet carry and
                  show your true ESG colors.
                </p>
              </div>

              <div>
                <img className="compensateIcon" src={compensate} />
                <p className="smallerTitles"> COMPENSATE</p>

                <p className="smallRoboto">
                  Your impact on the environment with a variety of verified carbon
                  offset projects
                </p>
              </div>
            </div>
            <br />
          </div>
        ) : (
          <div>
              <p className="marine">MARINE OFFSET PLATFORM (MOP)</p> <br />
            <p className="secondLine">
              designed by shipping professionals for the maritime transportation industry.
            </p>
            <br />
            <div className="flex flex-row">
              <div>
                <img className="calculateIcon" src={calculate} />
                <p className="smallerTitles">CALCULATE</p>
                <p className="smallRoboto">
                  Your ship's emissions across fuel types (fuel oils, distillates, bio-fuels, LNG, ammonia, methanol)
                </p>
              </div>

              <div>
                <img className="visualizeIcon" src={visualize} />
                <p className="smallerTitles"> VISUALIZE</p>
                <p className="smallRoboto">
                The different voyages, vessels and cargoes your fleet carry and
                  show your true ESG colors.
                </p>
              </div>

              <div>
                <img className="compensateIcon" src={compensate} />
                <p className="smallerTitles"> COMPENSATE</p>

                <p className="smallRoboto">
                  Your impact on the environment with a variety of verified carbon
                  offset projects
                </p>
              </div>
            </div>
            <br />
          </div>
        )}
      </>
    
    );
}

export default MarineOffsetLanding;