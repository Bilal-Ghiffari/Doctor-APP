import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, HomeProfile, NewsItem} from '../../components';
import {colors, fonts} from '../../utils';
import {useDoctor} from './useDoctor';

export default function Docktor({navigation}) {
  const {newsItem, profile} = useDoctor();
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile
              photo={profile.photo}
              fullName={profile.fullName}
              category={profile.category}
              onPress={() => navigation.navigate('UserProfile', profile)}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {newsItem?.map(item => (
            <NewsItem
              key={item?.id}
              title={item?.title}
              date={item?.date}
              image={item?.image}
            />
          ))}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapperSection: {paddingHorizontal: 16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
