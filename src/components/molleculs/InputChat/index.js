import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Button} from '../../atoms';
import {colors, fonts} from '../../../utils';

export default function InputChat({value, onChangeText, onButtonPress}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Tulis Pesan Untuk"
      />
      <Button
        type="btn-icon-send"
        onPress={onButtonPress}
        disable={value?.length < 1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
