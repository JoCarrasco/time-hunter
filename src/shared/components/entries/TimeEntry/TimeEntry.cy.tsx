import { cySelectors as durationDisplaySelectors } from '../../../../core/components/display/DurationDisplay/DurationDisplay.constants';
import { cySelectors as playStopButtonSelectors } from '../../../../core/components/controls/PlayStopButton/PlayStopButton.constants';
import { cySelectors as sharedTextFieldSelectors } from '../../../../core/components/forms/SharedTextField/SharedTextField.constants';

import TimeEntry from './TimeEntry';
import { cySelectors, values } from './TimeEntry.constants';

describe('CoreComponents/TimeEntry', () => {
  it('mounts', () => {
    cy.mount(<TimeEntry entry={values.timeEntry} />);
  });

  it('renders outer wrapper', () => {
    cy.mount(<TimeEntry entry={values.timeEntry} />);
    cy.get(cySelectors.wrapper).should('not.be.undefined');
  });

  it('it renders the DisplayDurationComponent', () => {
    cy.mount(<TimeEntry entry={values.timeEntry} />);
    cy.get(durationDisplaySelectors.duration)
      .then((component) => {
        cy.wrap(component);
      })
      .should('not.equal', undefined);
  });

  it('it renders the SharedTextField component', () => {
    cy.mount(<TimeEntry entry={values.timeEntry} />);
    cy.get(sharedTextFieldSelectors.textField)
      .then((component) => {
        cy.wrap(component);
      })
      .should('not.equal', undefined);
  });

  it('it renders the PlayStopButton component', () => {
    cy.mount(<TimeEntry entry={values.timeEntry} />);
    cy.get(playStopButtonSelectors.btnWrapper)
      .then((component) => {
        cy.wrap(component);
      })
      .should('not.equal', undefined);
  });
});
