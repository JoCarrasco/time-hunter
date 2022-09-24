import { Typography, Button, Grid, Stack } from '@mui/material';
import { TimeHelper } from '../../../helpers/TimeHelper';
import { selectors } from './DurationDisplay.constants';
import { blueGrey } from '@mui/material/colors';
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
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography
        data-cy={selectors.start}
        variant="button"
        color={blueGrey['900']}
      >
        {startDisplay}
      </Typography>
      <Typography variant="button" color={blueGrey['900']}>
        -
      </Typography>
      <Typography
        data-cy={selectors.end}
        variant="button"
        color={blueGrey['900']}
      >
        {endDisplay}
      </Typography>
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
