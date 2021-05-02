import { useState } from 'react';
import classes from './TextArea.module.css';
import React from 'react';

const TextArea = ({
  maxLength,
  showCounter,
  counterText,
  placeHolder,
  onChange,
}) => {
  const [textCount, setTextCount] = useState(0);
  const [counterSize, setCounterSize] = useState(maxLength);

  const counterArea = (
    <div className={classes.countCharsArea}>
      <span className={classes.remaining}>{counterText}</span>
      <span className={classes.maxChar}>{counterSize}</span>
    </div>
  );

  const placeHolderArea = (
    <span className={classes.textAreaPlaceholder}>{placeHolder}</span>
  );

  const getText = (e) => {
    const userInput = e.target.textContent;
    const counter = counterSize;

    if (e.which === 8) {
      const textSize = textCount;
      const userInputLength = userInput.length;
      const missingAmount = textSize - userInputLength;
      const newTextCount = textSize - missingAmount;
      const newCounter = counter + missingAmount;

      setTextCount(newTextCount);
      setCounterSize(newCounter);
    }
    onChange(userInput);
  };

  const handleText = (e) => {
    let count = textCount;
    let cSize = counterSize;

    const key = e.which;

    if (
      key !== 37 &&
      key !== 38 &&
      key !== 39 &&
      key !== 40 &&
      key !== 46 &&
      key !== 13 &&
      key !== 16
    ) {
      if (e.which !== 8 && count <= maxLength) {
        count++;
        cSize--;

        if (count === maxLength + 1) {
          cSize++;
        }
      } else if (e.which === 8 && count > 0) {
        if (count === maxLength + 1) {
          cSize++;
          count = maxLength - 1;
        } else {
          cSize++;
          count--;
        }
      }

      if (count > maxLength && e.which !== 8) {
        e.preventDefault();
      }

      setTextCount(count);
      setCounterSize(cSize);
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className={classes.textAreaContainer}>
      <div className={classes.textButtonArea}>
        <span
          className={classes.textAreaCreatePost}
          role='textbox'
          contentEditable
          spellCheck='false'
          onKeyDown={handleText}
          onKeyUp={getText}
        ></span>
        {!textCount && placeHolderArea}
        {showCounter && counterArea}
      </div>
    </div>
  );
};

export default TextArea;
