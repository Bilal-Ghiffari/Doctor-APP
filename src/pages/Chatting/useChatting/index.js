import {getDatabase, onValue, push, ref, set} from 'firebase/database';
import moment from 'moment';
import idLocal from 'moment/locale/id';
import {useEffect, useState} from 'react';
import {Fire} from '../../../config';
import {getChatTime, getDataItem, showMessageError} from '../../../utils';

export const useChatting = route => {
  const dataUser = route.params;
  const [chatContent, setChatContent] = useState('');
  const [doctor, setDoctor] = useState([]);
  const [chatData, setChatData] = useState([]);

  const db = getDatabase(Fire);
  const chatID = `${dataUser.uid}_${doctor.uid}`;

  useEffect(() => {
    getDataUserFromLocal();
    const urlFire = ref(db, `chatting/${chatID}/allChat/`);
    onValue(urlFire, snap => {
      if (snap.val()) {
        const dataSnap = snap.val();
        const allDataChat = [];
        Object.keys(dataSnap).map(keyDate => {
          const dataChat = dataSnap[keyDate];
          const newDataChat = [];
          Object.keys(dataChat).map(keyChat => {
            newDataChat.push({
              id: keyChat,
              ...dataChat[keyChat],
            });
          });
          allDataChat.push({
            id: keyDate,
            data: newDataChat,
          });
        });
        setChatData(allDataChat);
      }
    });
  }, [dataUser.uid, doctor.uid]);

  const getDataUserFromLocal = () => {
    getDataItem('doctorProfile').then(res => {
      setDoctor(res);
    });
  };

  const chatSend = () => {
    // DateChat
    const today = new Date();
    const formatToday = moment(today).locale('id', idLocal).format('LL');
    const urlFire = `chatting/${chatID}/allChat/${formatToday}`;
    const urlMessageUser = `messages/${dataUser.uid}/${chatID}`;
    const urlMessageDoctor = `messages/${doctor.uid}/${chatID}`;
    const postListRef = ref(db, urlFire);
    const dataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: doctor.uid,
    };
    const dataHistoryChatForDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataUser.uid,
    };

    //DataChat
    const data = {
      sendBy: doctor.uid,
      chatDate: new Date().getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };
    push(postListRef, data)
      .then(() => {
        setChatContent('');
        set(ref(db, urlMessageUser), dataHistoryChatForUser);
        set(ref(db, urlMessageDoctor), dataHistoryChatForDoctor);
      })
      .catch(err => {
        showMessageError(err.message);
      });
  };

  return {chatData, chatSend, dataUser, doctor, chatContent, setChatContent};
};
