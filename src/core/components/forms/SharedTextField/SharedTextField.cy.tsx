import SharedTextField from './SharedTextField';
import { cySelectors } from './SharedTextField.constants';

describe('CoreComponents/TimeLog', () => {
  it('mounts', () => {
    cy.mount(<SharedTextField />);
  });

  it('is editable', () => {
    const testStr = 'Hello World Test!';
    cy.mount(<SharedTextField />);
    cy.get(cySelectors.textField)
      .type(testStr)
      .then((input) => {
        cy.wrap(input.val() === testStr);
      })
      .should('equal', true);
  });
});
