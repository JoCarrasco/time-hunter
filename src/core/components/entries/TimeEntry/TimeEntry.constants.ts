import { TestUtils } from './../../../../testing/TestUtils';
// Selectors

const TIME_ENTRY_WRAPPER = 'time-entry-wrapper';
// Values
const TIME_ENTRY_DATE_START_TEST = new Date(2011, 10, 10, 7);
const TIME_ENTRY_DATE_START_TEST_EXPECTED_OUTPUT = "7:00 AM"
const TIME_ENTRY_DATE_END_TEST = new Date(2011, 10, 10, 7 , 30)
const TIME_ENTRY_DATE_END_TEST_EXPECTED_OUTPUT = "7:300 AM"
const TIME_ENTRY_DURATION_TEST_EXPECTED_OUTPUT = "02:00:00"

export const selectors = {
  wrapper: TIME_ENTRY_WRAPPER
}

export const cySelectors = {
  wrapper: TestUtils.cySelector(selectors.wrapper)
}

export const values = {
  start: TIME_ENTRY_DATE_START_TEST,
  end: TIME_ENTRY_DATE_END_TEST,
  expected: {
    start: TIME_ENTRY_DATE_START_TEST_EXPECTED_OUTPUT,
    end: TIME_ENTRY_DATE_END_TEST_EXPECTED_OUTPUT,
    duration: TIME_ENTRY_DURATION_TEST_EXPECTED_OUTPUT
  }
}
