import PlayStopButton from './PlayStopButton';
import { cySelectors } from './PlayStopButton.constants';

describe('CoreComponents/PlayStopButton', () => {
  it('mounts', () => {
    cy.mount(<PlayStopButton />);
  });

  it('idle and active contains a button', () => {
    cy.mount(<PlayStopButton />);
    cy.get(cySelectors.btnWrapper).should('contain.html', 'button');
    cy.mount(<PlayStopButton isActive={true} />);
    cy.get(cySelectors.btnWrapper).should('contain.html', 'button');
  });
});
