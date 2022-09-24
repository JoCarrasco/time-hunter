import { Input, TextField } from '@mui/material';
import constants from './SharedTextField.constants';
const { selectors } = constants;

interface ISharedTextFieldProps {
  defaultValue?: string;
}

const SharedTextField: React.FC<ISharedTextFieldProps> = (
  props: ISharedTextFieldProps,
) => {
  return (
    <Input
      defaultValue={props.defaultValue}
      disableUnderline={true}
      inputProps={{
        'data-cy': selectors.textField,
      }}
    />
  );
};

export default SharedTextField;
