import { Stack } from '@mui/material';
import PlayStopButton from '../../controls/PlayStopButton/PlayStopButton';
import DurationDisplay from '../../display/DurationDisplay/DurationDisplay';
import SharedTextField from '../../forms/SharedTextField/SharedTextField';

interface ITimeEntryProps {
  start: Date;
  end: Date;
  description?: string;
}

const TimeEntry: React.FC<ITimeEntryProps> = (props: ITimeEntryProps) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <SharedTextField defaultValue={props.description} />
      <Stack direction="row" alignItems="center">
        <DurationDisplay start={props.start} end={props.end} />
        <PlayStopButton />
      </Stack>
    </Stack>
  );
};

export default TimeEntry;
