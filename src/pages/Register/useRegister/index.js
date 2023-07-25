import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {
  setDataItem,
  showMessageError,
  useForm as useSelect,
} from '../../../utils';
import {useState} from 'react';
import {getDatabase, ref, set} from 'firebase/database';
import {Fire} from '../../../config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

export const useRegister = navigation => {
  const dispatch = useDispatch();
  const [selectForm, setSelectForm] = useSelect({
    category: 'dokter umum',
    gender: 'pria',
  });
  const {control, handleSubmit} = useForm();
  const [itemCategory] = useState([
    {id: 1, label: 'Dokter Umum', value: 'Dokter Umum'},
    {id: 2, label: 'Dokter Tht', value: 'Dokter Tht'},
    {id: 3, label: 'Dokter Bedah', value: 'Dokter Bedah'},
    {id: 4, label: 'Dokter Gigi', value: 'Dokter Gigi'},
    {id: 5, label: 'Spesialis Psikolog', value: 'Spesialis Psikolog'},
    {id: 6, label: 'Spesialis Saraf', value: 'Spesialis Saraf'},
    {id: 7, label: 'Spesialis Jantung', value: 'Spesialis Jantung'},
    ,
  ]);
  const [itemGender] = useState([
    {id: 1, label: 'pria', value: 'pria'},
    {id: 2, label: 'wanita', value: 'wanita'},
  ]);
  const db = getDatabase(Fire);
  const auth = getAuth(Fire);
  const onSubmit = e => {
    dispatch({type: 'SET_LOADING', value: true});
    createUserWithEmailAndPassword(auth, e.email, e.password)
      .then(userCredential => {
        const user = userCredential.user;
        // setForm('reset');
        const data = {
          fullName: e.fullName,
          category: selectForm.category,
          rate: 0,
          university: e.university,
          str_number: e.str_number,
          hospital_address: e.hospital_address,
          gender: selectForm.gender,
          email: e.email,
          uid: user.uid,
        };
        set(ref(db, 'doctors/' + user.uid), data);
        const itemPhoto = data;
        itemPhoto.photo = '';
        setDataItem('doctorPhoto', data);
        navigation.navigate('UploadPhoto', data);
        dispatch({type: 'SET_LOADING', value: false});
      })
      .catch(error => {
        dispatch({type: 'SET_LOADING', value: false});
        const errorMessage = error.message.split(' ');
        showMessageError(errorMessage[2]);
      });
  };
  return {
    itemCategory,
    itemGender,
    onSubmit,
    control,
    handleSubmit,
    setSelectForm,
    selectForm,
  };
};
