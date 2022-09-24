import TimerDisplay from './TimerDisplay';
import { cySelectors, values } from './TimerDisplay.contants';

describe('CoreComponents/TimerDisplay', () => {
  it('mounts', () => {
    cy.mount(<TimerDisplay />);
  });

  it(`In Idle state has value of "${values.defaultTimerVal}"`, () => {
    cy.mount(<TimerDisplay />);
    cy.get(cySelectors.displayInput).should('have.value', values.defaultTimerVal);
  });

  it('Select all the characters when clicked', () => {
    cy.mount(<TimerDisplay />);
    cy.get(cySelectors.displayInput)
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
    cy.get(cySelectors.displayInput)
      .clear()
      .blur()
      .then((input) => {
        cy.wrap(input.val() === values.defaultTimerVal);
      })
      .should('equal', true);
  });

  it('Should correct value to proper format using only numbers', () => {
    cy.mount(<TimerDisplay />);
    cy.get(cySelectors.displayInput)
      .click()
      .type('120.5')
      .blur()
      .then((input) => {
        cy.wrap(input.val() === values.testTimerVal);
      })
      .should('equal', true);
  });

  it('Should correct value to proper format using text', () => {
    cy.mount(<TimerDisplay />);
    cy.get(cySelectors.displayInput)
      .click()
      .type('02:00:30')
      .blur()
      .then((input) => {
        cy.wrap(input.val() === values.testTimerVal);
      })
      .should('equal', true);
  });

  it('Should maintain formatted value', () => {
    cy.mount(<TimerDisplay />);
    cy.get(cySelectors.displayInput)
      .type('120.5')
      .blur()
      .click()
      .blur()
      .then((input) => {
        cy.wrap(input.val() === values.testTimerVal);
      })
      .should('equal', true);
  });

  it('Should show proper duration passing a Date object', () => {
    const date = new Date();
    date.setHours(date.getHours() - 2);
    date.setMinutes(date.getMinutes() - 30);
    date.setSeconds(date.getSeconds() - 5);
    cy.mount(<TimerDisplay start={date} />).then(() => {});
    cy.get(cySelectors.displayInput)
      .then((input) => {
        cy.wrap(input.val() === '02:30:05');
      })
      .should('equal', true);
  });
});
