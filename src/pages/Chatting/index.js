import React, {useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItems, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';
import {useChatting} from './useChatting';

export default function Chatting({navigation, route}) {
  const {chatContent, chatData, chatSend, dataUser, doctor, setChatContent} =
    useChatting(route);
  const containerRef = useRef(null);
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataUser.fullName}
        desc={dataUser.profession}
        photo={dataUser.photo}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={containerRef}
          onContentSizeChange={() =>
            containerRef.current.scrollToEnd({animated: true})
          }>
          {chatData?.map(chat => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat?.data?.map(itemChat => {
                  const isMe = itemChat?.sendBy === doctor.uid;
                  return (
                    <ChatItems
                      key={itemChat?.id}
                      text={itemChat?.chatContent}
                      date={itemChat?.chatTime}
                      isMe={isMe}
                      photo={isMe ? null : dataUser.photo}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={val => setChatContent(val)}
        onButtonPress={chatSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
