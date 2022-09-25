import { Stack } from '@mui/material';
import PlayStopButton from '../../../../core/components/controls/PlayStopButton/PlayStopButton';
import DurationDisplay from '../../../../core/components/display/DurationDisplay/DurationDisplay';
import SharedTextField from '../../../../core/components/forms/SharedTextField/SharedTextField';
import { selectors } from './TimeEntry.constants';

interface ITimeEntry {
  id: string;
  start: Date;
  end: Date;
  description?: string;
}

interface ITimeEntryProps {
  entry: ITimeEntry;
}

const TimeEntry: React.FC<ITimeEntryProps> = (props: ITimeEntryProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      data-cy={selectors.wrapper}
    >
      <SharedTextField defaultValue={props.entry.description} />
      <Stack direction="row" alignItems="center">
        <DurationDisplay start={props.entry.start} end={props.entry.end} />
        <PlayStopButton />
      </Stack>
    </Stack>
  );
};

export default TimeEntry;
