import React from "react";
import "./LargeButton.css";

const LargeButton = props => {
  const { isPaused, isWorkingMode, taskNum, handleStart, handlePause } = props;
  let cls = "large-button";
  let playBtnCls = "play-btn";

  if (!isWorkingMode) cls += " break";
  if (!isPaused) cls += " started";
  return (
    <div className={cls}>
      <div className="inner-circle">
        <div
          className={playBtnCls}
          onClick={() => {
            if (taskNum === 0) return;
            if (isPaused) handleStart();
            else handlePause();
          }}
        >
          <i class="material-icons">{!isPaused ? "pause" : "play_arrow"}</i>
        </div>
      </div>
    </div>
  );
};

export default LargeButton;
