import { TestUtils } from "../../../../testing/TestUtils";

export const TEXT_FIELD_INPUT = "text-field-input";

export const selectors = {
  textField: TEXT_FIELD_INPUT
}

export const cySelectors = {
  textField: TestUtils.cySelector(selectors.textField),
}
