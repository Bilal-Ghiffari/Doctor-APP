import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const showMessageError = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.error,
    color: colors.white,
  });
};
