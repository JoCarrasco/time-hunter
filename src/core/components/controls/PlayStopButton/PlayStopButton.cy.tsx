import PlayStopButton from './PlayStopButton';
import { CY_SELECTOR_PLAY_STOP_BUTTON_WRAPPER } from './PlayStopButton.constants';

describe('CoreComponents/PlayStopButton', () => {
  it('mounts', () => {
    cy.mount(<PlayStopButton />);
  });

  it('idle and active contains a button', () => {
    cy.mount(<PlayStopButton />);
    cy.get(CY_SELECTOR_PLAY_STOP_BUTTON_WRAPPER).should(
      'contain.html',
      'button',
    );
    cy.mount(<PlayStopButton isActive={true} />);
    cy.get(CY_SELECTOR_PLAY_STOP_BUTTON_WRAPPER).should(
      'contain.html',
      'button',
    );
  });
});
