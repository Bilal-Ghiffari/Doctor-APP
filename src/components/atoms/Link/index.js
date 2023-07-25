import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Link({title, size, align, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styled.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styled = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
