import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ILCatObat, ILCatPsikiater, ILCatUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function DoctorCategory({category, onPress}) {
  function Icon() {
    if (category === 'dokter obatumum')
      return <ILCatUmum style={styles.illustrasion} />;
    if (category === 'psikiater')
      return <ILCatPsikiater style={styles.illustrasion} />;
    if (category === 'dokter obat')
      return <ILCatObat style={styles.illustrasion} />;
    return <ILCatUmum style={styles.illustrasion} />;
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustrasion: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
