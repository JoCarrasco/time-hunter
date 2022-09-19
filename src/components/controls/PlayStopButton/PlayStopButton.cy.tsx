import PlayStopButton from './PlayStopButton';

const PlayStopWrapperSelector = '[data-cy="action-play-stop-btn-wrapper"]';

describe('[Core Components] <PlayStopButton>', () => {
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
