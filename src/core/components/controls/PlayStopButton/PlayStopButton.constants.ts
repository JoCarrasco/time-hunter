import { TestUtils } from "../../../../testing/TestUtils";

export const PLAY_STOP_BUTTON_WRAPPER = "action-play-stop-btn-wrapper";

const selectors = {
  btnWrapper: PLAY_STOP_BUTTON_WRAPPER,
  cyBtnWrapper: TestUtils.cySelector(PLAY_STOP_BUTTON_WRAPPER)
}

export default selectors;
