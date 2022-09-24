import { TextField } from '@mui/material';
import constants from './SharedTextField.constants';
const { selectors } = constants;

interface ISharedTextFieldProps {
  defaultValue?: string;
}

const SharedTextField: React.FC<ISharedTextFieldProps> = (
  props: ISharedTextFieldProps,
) => {
  return (
    <TextField
      hiddenLabel
      defaultValue={props.defaultValue}
      variant="filled"
      size="small"
      inputProps={{
        'data-cy': selectors.textField,
      }}
      InputProps={{
        disableUnderline: true,
      }}
      fullWidth
    />
  );
};

export default SharedTextField;
