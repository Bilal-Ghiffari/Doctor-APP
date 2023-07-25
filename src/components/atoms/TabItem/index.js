import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospital,
  IconHospitalActive,
  IconMessage,
  IconMessageActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function TabItem({title, active, onPress, onLongPress}) {
  function Icon() {
    if (title === 'Home') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Messages') {
      return active ? <IconMessageActive /> : <IconMessage />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalActive /> : <IconHospital />;
    }
    // return <IconDoctor />;
  }
  return (
    <TouchableOpacity
      style={styled.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styled.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styled = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInActive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
