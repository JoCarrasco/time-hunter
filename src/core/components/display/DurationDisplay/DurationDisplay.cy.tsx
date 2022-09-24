import DurationDisplay from './DurationDisplay';
import { cySelectors, values } from './DurationDisplay.constants';

describe('CoreComponents/DurationDisplay', () => {
  it('mounts', () => {
    cy.mount(<DurationDisplay start={values.start} end={values.end} />);
  });

  it('should display proper start', () => {
    cy.mount(<DurationDisplay start={values.start} end={values.end} />);
    cy.get(cySelectors.start)
      .then((divWrapper) => {
        cy.wrap(divWrapper.text());
      })
      .should('equal', values.expected.start);
  });

  it('should display proper end', () => {
    cy.mount(<DurationDisplay start={values.start} end={values.end} />);
    cy.get(cySelectors.end)
      .then((divWrapper) => {
        cy.wrap(divWrapper.text());
      })
      .should('equal', values.expected.end);
  });

  it('should display proper duration', () => {
    cy.mount(<DurationDisplay start={values.start} end={values.end} />);
    cy.get(cySelectors.duration)
      .then((divWrapper) => {
        cy.wrap(divWrapper.text());
      })
      .should('equal', values.expected.duration);
  });
});
