import {getDatabase, ref, update} from 'firebase/database';
import {useState, useEffect} from 'react';
import {Fire} from '../../../config';
import {getAuth, updatePassword} from 'firebase/auth';
import {getDataItem, setDataItem, showMessageError} from '../../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto} from '../../../assets';

export const useUpdateProfile = navigation => {
  const [profile, setProfile] = useState({
    email: '',
    fullName: '',
    hospital_address: '',
  });
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [password, setPassword] = useState('');
  const db = getDatabase(Fire);
  const auth = getAuth(Fire);

  useEffect(() => {
    getDataItem('doctorProfile').then(res => {
      const data = res;
      data.photoForDB = res.photo.length > 1 ? res.photo : ILNullPhoto;
      const tempPhoto = res.photo.length > 1 ? {uri: res.photo} : ILNullPhoto;
      setProfile(data);
      setPhoto(tempPhoto);
    });
  }, []);

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImageFromGallery = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200},
      res => {
        if (res.didCancel || res.errorCode) {
          showMessageError('oops, sepertinya anda tidak memilih foto nya?');
        } else {
          const Assets = res.assets[0];
          const source = {uri: Assets.uri};
          setProfile({
            ...profile,
            photoForDB: `data:${Assets.type};base64, ${Assets.base64}`,
          });
          setPhoto(source);
        }
      },
    );
  };

  const onSubmit = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showMessageError('password kurang dari 6 karakter');
      } else {
        updatePasswordUser();
        updateProfileUser();
        navigation.navigate('MainApp');
      }
    } else {
      updateProfileUser();
      navigation.navigate('MainApp');
    }
  };

  const updatePasswordUser = () => {
    const user = auth.currentUser;
    updatePassword(user, password).catch(error => {
      const errorMessage = error.message.split(' ');
      showMessageError(errorMessage[2]);
    });
  };

  const updateProfileUser = () => {
    const data = profile;
    // balikan string base6
    data.photo = data.photoForDB;
    delete data.photoForDB;
    update(ref(db, `doctors/${data.uid}/`), data)
      .then(() => {
        setDataItem('doctorProfile', data);
      })
      .catch(error => {
        const errorMessage = error.message.split(' ');
        showMessageError(errorMessage[2]);
      });
  };

  return {
    getImageFromGallery,
    profile,
    photo,
    changeText,
    setPassword,
    password,
    onSubmit,
  };
};
