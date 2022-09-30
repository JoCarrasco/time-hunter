import { TestUtils } from './../../../../testing/TestUtils';

const TIME_ENTRY_LIST_WRAPPER = 'time-entry-list-wrapper'

export const selectors = {
  wrapper: TIME_ENTRY_LIST_WRAPPER
}

export const cySelectors = {
  wrapper: TestUtils.cySelector(selectors.wrapper)
}
