import { TestUtils } from "../../../../testing/TestUtils";

export const PLAY_STOP_BUTTON_WRAPPER = "action-play-stop-btn-wrapper";

export const selectors = {
  btnWrapper: PLAY_STOP_BUTTON_WRAPPER,
 
}

export const cySelectors = {
  btnWrapper: TestUtils.cySelector(selectors.btnWrapper)
}
