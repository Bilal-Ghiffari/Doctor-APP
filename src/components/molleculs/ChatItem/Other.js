import {Image, StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../../../utils';

export default function Other({title, date, photo}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: photo}} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
