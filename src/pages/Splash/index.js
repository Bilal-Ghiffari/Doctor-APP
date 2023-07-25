import {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getAuth} from 'firebase/auth';
import {ILLogo} from '../../assets';
import {Fire} from '../../config';
import {colors, fonts} from '../../utils';

export default function Splash({navigation}) {
  const auth = getAuth(Fire);
  const user = auth.currentUser;
  useEffect(() => {
    setTimeout(() => {
      if (user) {
        navigation.replace('MainApp');
      } else {
        navigation.replace('GetStarted');
      }
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Go Doctor</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    marginTop: 20,
  },
});
