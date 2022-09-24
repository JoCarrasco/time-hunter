import { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import constants from './TimerDisplay.contants';
import './TimerDisplay.scss';

interface ITimerDisplayProps {
  start?: Date;
}

const { vals, selectors, methods } = constants;

const TimerDisplay: React.FC<ITimerDisplayProps> = (
  props: ITimerDisplayProps,
) => {
  const inputRef = useRef<HTMLInputElement>();
  const defaultVal = methods.getDefaultTimerVal(props.start);
  const [lastVal, setLastVal] = useState(defaultVal);

  const handleBlur = () => {
    if (!inputRef.current || inputRef.current.value === lastVal) {
      return;
    }

    // If there's an instace of the ref, grab the input value
    const inputVal = inputRef.current.value;
    if (inputVal === '') {
      // If is empty, return default value
      inputRef.current.value = vals.defaultTimerVal;
      setLastVal(vals.defaultTimerVal);
      return;
    }

    inputRef.current.value = methods.convertStrToDuration(inputVal, lastVal);
    setLastVal(inputRef.current.value);
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(0, inputRef.current.value.length);
    }
  };

  return (
    <div
      className="timer-display-text-field-wrapper"
      data-cy={selectors.displayWrapper}
    >
      <TextField
        hiddenLabel
        defaultValue={defaultVal}
        variant="filled"
        size="small"
        inputRef={inputRef}
        inputProps={{
          'data-cy': selectors.displayInput,
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
