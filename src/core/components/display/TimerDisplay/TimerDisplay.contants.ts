import { TestUtils } from "../../../../testing/TestUtils";
import { TimeHelper } from "../../../helpers/TimeHelper";

// 120.5 Minutes
export const TEST_TIMER_VAL = '02:00:30';
export const DEFAULT_TIMER_VAL = "00:00:00";
export const TIMER_DISPLAY_INPUT = "timer-display-input";
export const TIMER_DISPLAY_WRAPPER = "timer-display-wrapper";

const selectors = {
  displayInput: TIMER_DISPLAY_INPUT,
  displayWrapper: TIMER_DISPLAY_WRAPPER,
  cyDisplayInput: TestUtils.cySelector(TIMER_DISPLAY_INPUT),
  cyDisplayWrapper: TestUtils.cySelector(TIMER_DISPLAY_WRAPPER)
}

const vals = {
  defaultTimerVal: DEFAULT_TIMER_VAL,
  testTimerVal: TEST_TIMER_VAL
}

const methods = {
  getDefaultTimerVal: (start?: Date) => {
    return start
      ? TimeHelper.dateRangeToDurationString(start, new Date())
      : vals.defaultTimerVal;
  },
  convertStrToDuration: (str: string, lastStr: string) => {
    return TimeHelper.isOnlyNumbers(str) && !str.includes(':')
      ? TimeHelper.convertNumbersToDurationString(str)
      : methods.formatDuration(str, lastStr);
  },
  formatDuration: (str: string, lastStr: string) => {
    const timeObj = TimeHelper.durationStringToFullTimeObject(str);
    return timeObj !== null
      ? `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`
      : lastStr;
  }
}

const constants = { selectors, vals, methods };

export default constants;
