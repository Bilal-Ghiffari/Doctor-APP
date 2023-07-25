import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styled.page}>
      <View>
        <ILLogo />
        <Text style={styled.title}>
          Konsultasi dengan Pasien jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styled = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.primary[600],
    color: colors.white,
    marginTop: 91,
  },
});
