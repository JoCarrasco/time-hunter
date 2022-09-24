import { Typography, Button, Stack, Divider } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { TimeHelper } from '../../../helpers/TimeHelper';
import { selectors } from './DurationDisplay.constants';

interface IDurationDisplayProps {
  start: Date;
  end: Date;
}

function formatDate(date: Date) {
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
}

const DurationDisplay: React.FC<IDurationDisplayProps> = (
  props: IDurationDisplayProps,
) => {
  const duration = TimeHelper.dateRangeToDurationString(props.start, props.end);
  const startDisplay = formatDate(props.start);
  const endDisplay = formatDate(props.end);

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Stack
        spacing={1}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Typography
          data-cy={selectors.start}
          variant="button"
          color={blueGrey['900']}
        >
          {startDisplay}
        </Typography>
        <Typography
          data-cy={selectors.end}
          variant="button"
          color={blueGrey['900']}
        >
          {endDisplay}
        </Typography>
      </Stack>

      <Button
        size="small"
        variant="outlined"
        data-cy={selectors.duration}
        color="info"
      >
        {duration}
      </Button>
    </Stack>
  );
};

export default DurationDisplay;
