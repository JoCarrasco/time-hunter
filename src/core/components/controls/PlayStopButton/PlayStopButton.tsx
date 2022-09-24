import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stop from '@mui/icons-material/Stop';
import selectors from './PlayStopButton.constants';

interface IPlayStopButtonProps {
  isActive?: boolean;
}

const PlayStopButton = (props: IPlayStopButtonProps) => {
  const ActionIcon = () => {
    return props.isActive ? <Stop /> : <PlayArrowIcon />;
  };

  return (
    <div data-cy={selectors.btnWrapper}>
      <IconButton
        aria-label="action-play-stop-btn"
        color="primary"
        data-cy="action-play-stop-btn"
      >
        <ActionIcon />
      </IconButton>
    </div>
  );
};

export default PlayStopButton;
