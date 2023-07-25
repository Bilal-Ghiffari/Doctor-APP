import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function HomeProfile({onPress, fullName, photo, category}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
