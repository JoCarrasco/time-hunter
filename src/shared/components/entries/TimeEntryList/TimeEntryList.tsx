import { Divider, Paper, Stack, Typography } from '@mui/material';
import TimeEntry from '../TimeEntry/TimeEntry';
import { selectors } from './TimeEntryList.constants';
import './TimeEntryList.scss';

interface ITimeEntry {
  id: string;
  description?: string;
  start: Date;
  end: Date;
}

interface ITimeEntryListProps {
  entries: ITimeEntry[];
}

export const TimeEntryList: React.FC<ITimeEntryListProps> = (
  props: ITimeEntryListProps,
) => {
  return (
    <Paper data-cy={selectors.wrapper}>
      <Typography variant="h6" gutterBottom>
        Today
      </Typography>
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" light />}
      >
        {props.entries.map((entry) => (
          <div key={entry.id} className="time-entry-outer-wrapper">
            <TimeEntry entry={entry} />
          </div>
        ))}
      </Stack>
    </Paper>
  );
};

export default TimeEntryList;
