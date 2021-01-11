import React, { useState, Fragment } from 'react';

const ChooseTank = () => {
  const [defaultTip, setDefaultTip] = useState(1);

  const handelPrevClick = (event) => {
    defaultTip === 1
      ? setDefaultTip(5)
      : setDefaultTip((tipValue) => tipValue - 1);
  };
  const handelNextClick = (event) => {
    defaultTip === 5
      ? setDefaultTip(1)
      : setDefaultTip((tipValue) => tipValue + 1);
  };

  const getTipsValues = (tipsValue) => {
    switch (tipsValue) {
      case 1:
        return `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren.${tipsValue}`;
        break;
      case 2:
        return `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.${tipsValue}`;
        break;
      case 3:
        return `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua.${tipsValue}`;
        break;
      case 4:
        return `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.${tipsValue}`;
        break;
      case 5:
        return `Lorem ipsum dolor sit amet, consetetur sadipscing elitr.${tipsValue}`;
        break;
      default:
        return;
        break;
    }
  };
  const RenderTips = ({ tipsValue }) => {
    return (
      <div className="tipsContentAnimation">{getTipsValues(tipsValue)}</div>
    );
  };

  return (
    <div className="chooseTank">
      <h4 className="chooseTankH4">Choosing Your Tank</h4>
      <div className="chooseTankText">
        <div className="tipsContent">
          <div className="selectedTipsContent">
            <RenderTips tipsValue={defaultTip} />
          </div>
          <div className="selectedTipsImage">
            <img src="https://picsum.photos/200/150" alt="" />
          </div>
        </div>
        <div className="tipsNextPrev">
          <a
            className="previousTip"
            href="javascript:void(0)"
            onClick={handelPrevClick}
          >
            <span className="prevousIcon">{'<'}</span>
            <span>{'Previous Tip'}</span>
          </a>
          <span className="tipsCount">{defaultTip} of 5</span>
          <a
            className="previousTip"
            href="javascript:void(0)"
            onClick={handelNextClick}
          >
            <span>{'Next Tip'}</span>
            <span className="nextIcon">{'>'}</span>
          </a>
        </div>
      </div>
      <div className="tankImage">Tank image</div>
    </div>
  );
};

export default ChooseTank;
