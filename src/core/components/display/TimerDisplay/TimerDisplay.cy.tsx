import TimerDisplay from './TimerDisplay';
import constants from './TimerDisplay.contants';
const { vals, selectors } = constants;

describe('CoreComponents/TimerDisplay', () => {
  it('mounts', () => {
    cy.mount(<TimerDisplay />);
  });

  it(`In Idle state has value of "${vals.defaultTimerVal}"`, () => {
    cy.mount(<TimerDisplay />);
    cy.get(selectors.cyDisplayInput).should('have.value', vals.defaultTimerVal);
  });

  it('Select all the characters when clicked', () => {
    cy.mount(<TimerDisplay />);
    cy.get(selectors.cyDisplayInput)
      .click()
      .then((input) => {
        // Get the HTML DOM Node of the Input
        const inputHTML = input.get(0) as HTMLInputElement;
        const valueLengh = inputHTML.value.length;

        cy.wrap(
          inputHTML.selectionStart === 0 &&
            inputHTML.selectionEnd === valueLengh,
        );
      })
      .should('equal', true);
  });

  it('Return to default value when empty', () => {
    cy.mount(<TimerDisplay />);
    cy.get(selectors.cyDisplayInput)
      .clear()
      .blur()
      .then((input) => {
        cy.wrap(input.val() === vals.defaultTimerVal);
      })
      .should('equal', true);
  });

  it('Should correct value to proper format using only numbers', () => {
    cy.mount(<TimerDisplay />);
    cy.get(selectors.cyDisplayInput)
      .click()
      .type('120.5')
      .blur()
      .then((input) => {
        cy.wrap(input.val() === vals.testTimerVal);
      })
      .should('equal', true);
  });

  it('Should correct value to proper format using text', () => {
    cy.mount(<TimerDisplay />);
    cy.get(selectors.cyDisplayInput)
      .click()
      .type('02:00:30')
      .blur()
      .then((input) => {
        cy.wrap(input.val() === vals.testTimerVal);
      })
      .should('equal', true);
  });

  it('Should maintain formatted value', () => {
    cy.mount(<TimerDisplay />);
    cy.get(selectors.cyDisplayInput)
      .type('120.5')
      .blur()
      .click()
      .blur()
      .then((input) => {
        cy.wrap(input.val() === vals.testTimerVal);
      })
      .should('equal', true);
  });

  it('Should show proper duration passing a Date object', () => {
    const date = new Date();
    date.setHours(date.getHours() - 2);
    date.setMinutes(date.getMinutes() - 30);
    date.setSeconds(date.getSeconds() - 5);
    cy.mount(<TimerDisplay start={date} />).then(() => {});
    cy.get(selectors.cyDisplayInput)
      .then((input) => {
        cy.wrap(input.val() === '02:30:05');
      })
      .should('equal', true);
  });
});
