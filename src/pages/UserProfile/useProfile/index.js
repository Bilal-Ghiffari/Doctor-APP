import {getAuth, signOut} from 'firebase/auth';
import {Fire} from '../../../config';
import {showMessageError} from '../../../utils';

export const useProfile = (navigation, route) => {
  const profile = route.params;
  const auth = getAuth(Fire);
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch(error => {
        const errorMessage = error.message.split(' ');
        showMessageError(errorMessage[2]);
      });
  };

  return {profile, LogOut};
};
