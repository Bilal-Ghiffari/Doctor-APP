import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconOnly from './IconOnly';
import {colors, fonts} from '../../../utils';
import BtnIconSend from './BtnIconSend';

export default function Button({type, title, onPress, icon, disable}) {
  if (type === 'btn-icon-send')
    return <BtnIconSend disable={disable} onPress={onPress} />;
  if (type === 'icon-only') return <IconOnly icon={icon} onPress={onPress} />;
  if (disable) {
    return (
      <View style={styles.disabledBtn}>
        <Text style={styles.textDisabledBtn}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary' ? colors.white : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  disabledBtn: {
    backgroundColor: colors.button.disable.background,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: type => ({
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: type === 'secondary' ? colors.secondary : colors.white,
  }),
  textDisabledBtn: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.button.disable.text,
  },
});
