import {useState, useEffect} from 'react';
import {child, get, getDatabase, ref} from 'firebase/database';
import {Fire} from '../../../config';
import {ILNullPhoto} from '../../../assets';
import {getDataItem} from '../../../utils';

export const useDoctor = () => {
  const dbRef = ref(getDatabase(Fire));
  const [newsItem, setNewsItem] = useState([]);
  const [profile, setProfile] = useState({
    fullName: '',
    category: '',
    photo: ILNullPhoto,
  });
  useEffect(() => {
    get(child(dbRef, `/news`)).then(res => {
      if (res.exists()) {
        setNewsItem(res.val());
      }
    });
    getDataItem('doctorProfile').then(res => {
      const data = res;
      data.photo = res.photo !== '' ? {uri: res.photo} : {uri: res.photoForDB};
      setProfile(data);
    });
  }, [profile]);

  return {newsItem, profile};
};
