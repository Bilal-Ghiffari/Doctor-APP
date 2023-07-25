import {useDispatch} from 'react-redux';
import {setDataItem, showMessageError} from '../../../utils';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, onValue, ref} from 'firebase/database';
import {Fire} from '../../../config';
import {useForm, Controller} from 'react-hook-form';

export const useLogin = navigation => {
  const {handleSubmit, control} = useForm();
  const dispatch = useDispatch();
  const auth = getAuth(Fire);
  const db = getDatabase(Fire);
  const onSubmit = e => {
    dispatch({type: 'SET_LOADING', value: true});
    signInWithEmailAndPassword(auth, e.email, e.password)
      .then(userCredential => {
        const user = userCredential.user;
        onValue(
          ref(db, `doctors/${user.uid}/`),
          resDB => {
            if (resDB.val()) {
              setDataItem('doctorProfile', resDB.val());
              navigation.replace('MainApp');
              dispatch({type: 'SET_LOADING', value: false});
            }
          },
          {onlyOnce: true},
        );
        // setForm('reset');
      })
      .catch(error => {
        dispatch({type: 'SET_LOADING', value: false});
        const errorMessage = error.message.split(' ');
        showMessageError(errorMessage[2]);
      });
  };

  return {
    onSubmit,
    Controller,
    handleSubmit,
    control,
  };
};
