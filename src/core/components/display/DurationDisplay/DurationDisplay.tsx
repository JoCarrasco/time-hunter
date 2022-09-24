import { Typography, Button, Grid, Stack } from '@mui/material';
import { TimeHelper } from '../../../helpers/TimeHelper';
import { selectors } from './DurationDisplay.constants';
import { blueGrey } from '@mui/material/colors';
interface IDurationDisplayProps {
  start: Date;
  end: Date;
}

function formatAMPM(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const rminutes = minutes < 10 ? '0' + minutes : minutes;
  return (hours + ':' + rminutes + ' ' + ampm).toUpperCase();
}

const DurationDisplay: React.FC<IDurationDisplayProps> = (
  props: IDurationDisplayProps,
) => {
  const duration = TimeHelper.dateRangeToDurationString(props.start, props.end);
  const startDisplay = formatAMPM(props.start);
  const endDisplay = formatAMPM(props.end);

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
