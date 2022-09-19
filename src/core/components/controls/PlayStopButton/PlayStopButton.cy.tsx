import PlayStopButton from './PlayStopButton';
import { PlayStopWrapperSelector } from './PlayStopButton.constants';

describe('CoreComponents/PlayStopButton', () => {
  it('mounts', () => {
    cy.mount(<PlayStopButton />);
  });

  it('idle and active contains a button', () => {
    cy.mount(<PlayStopButton />);
    cy.get(PlayStopWrapperSelector).should('contain.html', 'button');
    cy.mount(<PlayStopButton isActive={true} />);
    cy.get(PlayStopWrapperSelector).should('contain.html', 'button');
  });
});
