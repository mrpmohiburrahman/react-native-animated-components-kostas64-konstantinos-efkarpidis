import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Easing, useSharedValue, withTiming} from 'react-native-reanimated';

import MyButton from '@components/charts/MyButton';
import GroupChart from '@components/charts/groupChart/GroupChart';
import StackChart from '@components/charts/stackChart/StackChart';

const GroupStackCharts = () => {
  const insets = useSafeAreaInsets();
  const animate = useSharedValue(0);

  const paddingTop = insets.top > 0 ? insets.top + 8 : 24;
  const paddingBottom = insets.bottom > 0 ? insets.bottom + 8 : 24;

  const animateIt = (forward = true) => {
    const toValue = forward ? 1 : 0;
    animate.value = withTiming(toValue, {duration: 1000, easing: Easing.ease});
  };

  return (
    <View style={[styles.container, {paddingTop, paddingBottom}]}>
      <View style={styles.chartsContainer}>
        <GroupChart animate={animate} />
        <StackChart animate={animate} />
      </View>

      <View style={styles.btnsContainer}>
        <MyButton title="Animate" onPress={animateIt} />
        <MyButton title="Animate Back" onPress={() => animateIt(false)} />
      </View>
    </View>
  );
};

export default GroupStackCharts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eeeee2',
    justifyContent: 'center',
  },
  chartsContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  btnsContainer: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    marginTop: 16,
  },
});
