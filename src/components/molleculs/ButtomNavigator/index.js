import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TabItem} from '../../atoms';
import {colors} from '../../../utils';

export default function BottomNavigator({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        // isActive menu
        const isFocused = state.index === index;

        const onPress = () => {
          // event ketika tekan/press
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            // mencegah default ketika di press
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          // ketika ditekan lama onLongPress
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TabItem
            key={index}
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 53,
    paddingVertical: 12,
    backgroundColor: colors.white,
    height: 70,
  },
});
