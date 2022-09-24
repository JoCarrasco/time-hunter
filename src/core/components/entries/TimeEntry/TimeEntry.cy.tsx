import { cySelectors as durationDisplaySelectors } from '../../display/DurationDisplay/DurationDisplay.constants';
import { cySelectors as playStopButtonSelectors } from '../../controls/PlayStopButton/PlayStopButton.constants';
import { cySelectors as sharedTextFieldSelectors } from '../../forms/SharedTextField/SharedTextField.constants';

import TimeEntry from './TimeEntry';
import { values } from './TimeEntry.constants';

describe('CoreComponents/TimeEntry', () => {
  it('mounts', () => {
    cy.mount(<TimeEntry start={values.start} end={values.end} />);
  });

  it('it renders the DisplayDurationComponent', () => {
    cy.mount(<TimeEntry start={values.start} end={values.end} />);
    cy.mount(<TimeEntry start={values.start} end={values.end} />);
    cy.get(durationDisplaySelectors.duration)
      .then((component) => {
        cy.wrap(component);
      })
      .should('not.equal', undefined);
  });

  it('it renders the SharedTextField component', () => {
    cy.mount(<TimeEntry start={values.start} end={values.end} />);
    cy.get(sharedTextFieldSelectors.textField)
      .then((component) => {
        cy.wrap(component);
      })
      .should('not.equal', undefined);
  });

  it('it renders the PlayStopButton component', () => {
    cy.mount(<TimeEntry start={values.start} end={values.end} />);
    cy.get(playStopButtonSelectors.btnWrapper)
      .then((component) => {
        cy.wrap(component);
      })
      .should('not.equal', undefined);
  });
});
