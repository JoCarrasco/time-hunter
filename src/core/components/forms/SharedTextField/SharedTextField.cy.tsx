import SharedTextField from './SharedTextField';
import constants from './SharedTextField.constants';
const { selectors } = constants;

describe('CoreComponents/TimeLog', () => {
  it('mounts', () => {
    cy.mount(<SharedTextField />);
  });

  it('is editable', () => {
    const testStr = 'Hello World Test!';
    cy.mount(<SharedTextField />);
    cy.get(selectors.cyTextField)
      .type(testStr)
      .then((input) => {
        cy.wrap(input.val() === testStr);
      })
      .should('equal', true);
  });
});
