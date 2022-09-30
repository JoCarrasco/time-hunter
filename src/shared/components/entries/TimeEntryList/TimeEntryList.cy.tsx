import { values as TimeEntryValues } from '../TimeEntry/TimeEntry.constants';
import TimeEntryList from './TimeEntryList';
import { cySelectors as cySelectorsTimeEntry } from '../TimeEntry/TimeEntry.constants';

describe('CoreComponents/TimeEntryList', () => {
  it('mounts', () => {
    cy.mount(<TimeEntryList entries={[]} />);
  });

  it('renders several TimeEntry components', () => {
    const timeEntryArr = [
      TimeEntryValues.timeEntry,
      TimeEntryValues.timeEntry,
      TimeEntryValues.timeEntry,
      TimeEntryValues.timeEntry,
    ];

    cy.mount(<TimeEntryList entries={timeEntryArr} />);
    cy.get(cySelectorsTimeEntry.wrapper).then((compArr) => {
      expect(compArr).to.be.length(timeEntryArr.length);
    });
  });
});
