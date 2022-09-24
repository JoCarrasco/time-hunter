import { TestUtils } from "../../../../testing/TestUtils";

// Selectors 
const DATE_START_ELEMENT = 'date-start-el'
const DATE_END_ELEMENT = 'date-end-el'
const DURATION_ELEMENT = 'duration-el'

// Values
const DATE_START_TEST = new Date(2011, 10, 10, 7);
const DATE_START_TEST_EXPECTED_OUTPUT = "7:00 AM"
const DATE_END_TEST = new Date(2011, 10, 10, 9)
const DATE_END_TEST_EXPECTED_OUTPUT = "9:00 AM"
const DURATION_TEST_EXPECTED_OUTPUT = "02:00:00"

export const cySelectors = {
  start: TestUtils.cySelector(DATE_START_ELEMENT),
  end: TestUtils.cySelector(DATE_END_ELEMENT),
  duration: TestUtils.cySelector(DURATION_ELEMENT)
}

export const selectors = {
  start: DATE_START_ELEMENT,
  end: DATE_END_ELEMENT,
  duration: DURATION_ELEMENT,
}

export const values = {
  start: DATE_START_TEST,
  end: DATE_END_TEST,
  expected: {
    start: DATE_START_TEST_EXPECTED_OUTPUT,
    end: DATE_END_TEST_EXPECTED_OUTPUT,
    duration: DURATION_TEST_EXPECTED_OUTPUT
  }
}
