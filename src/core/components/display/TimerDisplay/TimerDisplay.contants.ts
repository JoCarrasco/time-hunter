import { TestUtils } from "../../../../testing/TestUtils";
import { TimeHelper } from "../../../helpers/TimeHelper";

// 120.5 Minutes
export const TEST_TIMER_VAL = '02:00:30';
export const DEFAULT_TIMER_VAL = "00:00:00";


// Vals
export const TIMER_DISPLAY_INPUT = "timer-display-input";
export const TIMER_DISPLAY_WRAPPER = "timer-display-wrapper";

export const selectors = {
  displayInput: TIMER_DISPLAY_INPUT,
  displayWrapper: TIMER_DISPLAY_WRAPPER
}

export const cySelectors = {
  displayInput: TestUtils.cySelector(selectors.displayInput),
  displayWrapper: TestUtils.cySelector(selectors.displayWrapper)
}

export const values = {
  defaultTimerVal: DEFAULT_TIMER_VAL,
  testTimerVal: TEST_TIMER_VAL
}

// Functions
export function getDefaultTimerVal(start?: Date) {
  return start
    ? TimeHelper.dateRangeToDurationString(start, new Date())
    : values.defaultTimerVal;
}

export function convertStrToDuration(str: string, lastStr: string) {
  return TimeHelper.isOnlyNumbers(str) && !str.includes(':')
    ? TimeHelper.convertNumbersToDurationString(str)
    : formatDuration(str, lastStr);
}

export function formatDuration(str: string, lastStr: string) {
  const timeObj = TimeHelper.durationStringToFullTimeObject(str);
  return timeObj !== null
    ? `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`
    : lastStr;
}
