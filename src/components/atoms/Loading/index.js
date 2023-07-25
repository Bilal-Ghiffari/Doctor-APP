import {StyleSheet, Text, View} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import {colors, fonts} from '../../../utils';

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <BallIndicator color={colors.primary} />
      {/* <ActivityIndicator size="large" color={colors.primary} /> */}
      {/* <Text style={styles.text}>Loading...</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.loadingBackground,
    width: '100%',
    height: '100%',
  },
  // text: {
  //   fontSize: 18,
  //   textAlign: 'center',
  //   color: colors.primary,
  //   fontFamily: fonts.primary[600],
  //   marginTop: 16,
  // },
});
