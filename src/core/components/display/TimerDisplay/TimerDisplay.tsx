import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';
import { TimeHelper } from '../../../helpers/TimeHelper';
import {
  DEFAULT_TIMER_DISPLAY_STRING,
  CY_SELECTOR_VAL_TIMER_DISPLAY_INPUT,
  CY_SELECTOR_VAL_TIMER_DISPLAY_WRAPPER,
} from './TimerDisplay.contants';
import './TimerDisplay.scss';

interface ITimerDisplayProps {
  start?: Date;
}

const TimerDisplay = (props: ITimerDisplayProps) => {
  const [val, setVal] = useState(
    props.start
      ? TimeHelper.dateRangeToDurationString(props.start, new Date())
      : DEFAULT_TIMER_DISPLAY_STRING,
  );
  const [lastVal, setLastVal] = useState(val);
  const inputRef = useRef<HTMLInputElement>();

  const handleBlur = () => {
    if (inputRef.current) {
      if (inputRef.current.value !== lastVal) {
        const inputVal = inputRef.current.value;
        if (inputVal === '') {
          inputRef.current.value = DEFAULT_TIMER_DISPLAY_STRING;
        } else {
          if (TimeHelper.isOnlyNumbers(inputVal) && !inputVal.includes(':')) {
            const durationStr =
              TimeHelper.convertNumbersToDurationString(inputVal);
            inputRef.current.value = durationStr;
          } else {
            const timeObj = TimeHelper.durationStringToFullTimeObject(inputVal);
            if (timeObj !== null) {
              inputRef.current.value = `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`;
            } else {
              inputRef.current.value = lastVal;
            }
          }
        }

        setLastVal(inputRef.current.value);
      }
    }
  };

  const handleFocus = () => {
    if (inputRef.current) {
      const valLength = inputRef.current.value.length;
      inputRef.current.setSelectionRange(0, valLength);
    }
  };

  return (
    <div
      className="timer-display-text-field-wrapper"
      data-cy={CY_SELECTOR_VAL_TIMER_DISPLAY_WRAPPER}
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue={val}
        variant="filled"
        size="small"
        inputRef={inputRef}
        onChange={(e) => setVal(e.target.value)}
        inputProps={{
          'data-cy': CY_SELECTOR_VAL_TIMER_DISPLAY_INPUT,
        }}
        InputProps={{
          disableUnderline: true,
          onFocus: handleFocus,
          onBlur: handleBlur,
        }}
        fullWidth
      />
    </div>
  );
};

export default TimerDisplay;
