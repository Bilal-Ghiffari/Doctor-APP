import {child, get, getDatabase, onValue, ref} from 'firebase/database';
import {useState, useEffect} from 'react';
import {Fire} from '../../../config';
import {getDataItem} from '../../../utils';

export const useMessage = () => {
  const [doctor, setDoctor] = useState({});
  const [historyChat, setHistoryChat] = useState([]);
  const [skeleton, setSkeleton] = useState(false);
  const db = getDatabase(Fire);
  const urlHistory = ref(db, `messages/${doctor.uid}/`);

  useEffect(() => {
    getDataUserFromLocal();
    onValue(urlHistory, async snap => {
      if (snap.val()) {
        const oldData = snap.val();
        const data = [];
        const promises = await Object.keys(oldData).map(async key => {
          setSkeleton(true);
          const urlUidUsers = `users/${oldData[key].uidPartner}`;
          await get(child(ref(db), urlUidUsers))
            .then(snapshot => {
              if (snapshot.exists()) {
                const detailUsers = snapshot.val();
                data.push({
                  id: key,
                  ...oldData[key],
                  detailUser: detailUsers.data,
                });
              }
            })
            .catch(err => err);
        });
        await new Promise.all(promises);
        setHistoryChat(data);
        setSkeleton(false);
      }
    });
  }, [doctor.uid]);

  const getDataUserFromLocal = () => {
    getDataItem('doctorProfile').then(res => {
      setDoctor(res);
    });
  };

  return {historyChat, skeleton};
};
