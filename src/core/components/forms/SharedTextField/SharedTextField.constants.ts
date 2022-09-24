import { TestUtils } from "../../../../testing/TestUtils";

export const TEXT_FIELD_INPUT = "text-field-input";

const selectors = {
  textField: TEXT_FIELD_INPUT,
  cyTextField: TestUtils.cySelector(TEXT_FIELD_INPUT),
}

export default { selectors };
