import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconAddPhoto, IconRemovePhoto} from '../../assets';
import {Button, Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {useUploadPhoto} from './useUploadPhoto';

export default function UploadPhoto({navigation}) {
  const {photo, dataPhoto, hasPhoto, getImageFromGallery, uploadAndContinue} =
    useUploadPhoto(navigation);
  return (
    <View style={styled.page}>
      <Header title="Upload Photo" />
      <View style={styled.content}>
        <View style={styled.profile}>
          <TouchableOpacity
            style={styled.avatarWrapper}
            onPress={getImageFromGallery}>
            <Image source={photo} style={styled.avatar} />
            {hasPhoto && <IconRemovePhoto style={styled.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styled.addPhoto} />}
          </TouchableOpacity>
          <Text style={styled.name}>{dataPhoto.fullName}</Text>
          <Text style={styled.profession}>{dataPhoto.category}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
        </View>
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
    // alignContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
});
