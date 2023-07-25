import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors} from '../../../../utils';

export default function ListDoctorSkeleton() {
  return (
    <SkeletonPlaceholder backgroundColor={colors.skeleton}>
      <View style={styles.container}>
        <View style={styles.avatar} />
        <View style={styles.content}>
          <View style={styles.name} />
          <View style={styles.desc} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1, marginLeft: 16},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    width: 130,
    height: 8,
    borderRadius: 10,
  },
  desc: {
    width: 90,
    height: 8,
    borderRadius: 10,
    marginTop: 10,
  },
});
