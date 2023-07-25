import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap, Header, ListProfile, Profile} from '../../components';
import {useProfile} from './useProfile';

export default function UserProfile({navigation, route}) {
  const {LogOut, profile} = useProfile(navigation, route);
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile?.fullName?.length > 0 && (
        <Profile
          name={profile?.fullName}
          desc={profile?.category}
          photo={profile?.photo}
        />
      )}
      <Gap height={14} />
      <ListProfile
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <ListProfile
        name="Languange"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <ListProfile
        name="Give Us Rate"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <ListProfile
        name="Sign Out"
        desc="Last Update Yesterday"
        type="next"
        icon="help"
        onPress={LogOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
});
