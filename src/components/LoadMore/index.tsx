import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StyleProp,
  ViewProps,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface PageProps {
  translateX: Animated.SharedValue<number>;
  style?: StyleProp<ViewProps>;
}

const { height, width } = Dimensions.get('window');
const SIZE = width * 0.7;
const Page: React.FC<PageProps> = ({ translateX, style }) => {
  const inputRange = [(1 - 1) * width, 9 * width, (1 + 1) * width];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{ scale: scale }],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
      transform: [{ translateY }],
    };
  });
  return (
    <View style={[styles.pageContainer, { backgroundColor: 'green' }, style]}>
      <Animated.View
        style={[styles.square, { backgroundColor: 'blue' }, rStyle]}
      >
        <Animated.View style={[{ position: 'absolute' }, rTextStyle]}>
          <Text style={styles.title}>Looad More</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: hp(70),
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(5),
    marginHorizontal: wp(10),
  },
  square: {
    height: SIZE,
    width: SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    color: 'red',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Page;
