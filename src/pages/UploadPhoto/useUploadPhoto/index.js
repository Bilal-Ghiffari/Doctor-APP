import {getDatabase, ref, update} from 'firebase/database';
import {useState, useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {Fire} from '../../../config';
import {getDataItem, setDataItem, showMessageError} from '../../../utils';
import {ILNullPhoto} from '../../../assets';

export const useUploadPhoto = navigation => {
  // const {fullName, profession, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');
  const [dataPhoto, setDataPhoto] = useState({});

  const db = getDatabase(Fire);
  useEffect(() => {
    getDataItem('doctorPhoto').then(res => {
      setDataPhoto(res);
    });
  }, [dataPhoto]);

  const getImageFromGallery = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200},
      res => {
        if (res.didCancel || res.errorCode) {
          showMessageError('oops, sepertinya anda tidak memilih foto nya?');
        } else {
          const Assets = res.assets[0];
          const source = {uri: Assets.uri};
          setPhotoForDB(`data:${Assets.type};base64, ${Assets.base64}`);
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    update(ref(db, `doctors/${dataPhoto.uid}`), {
      photo: photoForDB,
    });
    const data = dataPhoto;
    data.photo = photoForDB;
    setDataItem('doctorProfile', data);
    navigation.replace('MainApp');
  };

  return {dataPhoto, hasPhoto, photo, getImageFromGallery, uploadAndContinue};
};
