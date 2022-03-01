import { images } from "../../constants";
import LinearWithValueLabel from "../LinearBuffer";
import "./index.css";

import React from "react";

const work = [
  {
    imgUrl: images.html,
    progress: 100,
  },
  {
    imgUrl: images.bootstrap,
    progress: 100,
  },
  {
    imgUrl: images.program,
    progress: 93,
  },
  {
    imgUrl: images.develop_foundations,
    progress: 100,
  },
  {
    imgUrl: images.dynamic_web,
    progress: 100,
  },
  {
    imgUrl: images.javascript,
    progress: 80,
  },
];

const workSmall = [
  {
    imgUrl: images.html_sm,
    progress: 100,
  },
  {
    imgUrl: images.bootstrap_sm,
    progress: 100,
  },
  {
    imgUrl: images.dynamic_web_sm,
    progress: 100,
  },
];

export const Work = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    Infinity: true,
    speed: 500,
  };
  return (
    <>
      <div className="work__container">
        {work.map((eachItem, index) => (
          <div key={index} className="large__container">
            <img
              src={eachItem.imgUrl}
              alt=""
              style={{ objectFit: "contain" }}
            />
            <LinearWithValueLabel
              value={eachItem.progress}
              className="work__progress_label"
            />
          </div>
        ))}
        {workSmall.map((eachItem, index) => (
          <div
            key={index}
            className="work__small__container"
            style={{ width: "20em", marginTop: ".5em" }}
          >
            <img src={eachItem.imgUrl} alt="" style={{ width: "100%" }} />
            <LinearWithValueLabel
              value={eachItem.progress}
              className="work__progress_label"
            />
          </div>
        ))}
      </div>
    </>
  );
};
