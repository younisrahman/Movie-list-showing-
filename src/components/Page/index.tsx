import { Colors } from '@app/config/theme';
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
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
import CircularProgress from 'react-native-circular-progress-indicator';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

interface PageProps {
  index: number;
  translateX: Animated.SharedValue<number>;
  data?: object;
}
const { height, width } = Dimensions.get('window');
const Page: React.FC<PageProps> = ({ index, translateX, data }) => {
  const navigation = useNavigation();

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    return {
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
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MovieDetailsScreen', { data: data });
      }}
      activeOpacity={0.9}
    >
      <Animated.View
        style={[
          styles.pageContainer,
          { backgroundColor: Colors.White },
          rStyle,
        ]}
      >
        <Animated.Image
          source={{
            uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`,
          }}
          style={[
            styles.image,
            // { backgroundColor: `rgba(150,25,250,.${index + 2})` },
          ]}
        />

        <View style={{ width: '100%' }}>
          <View
            style={{
              height: hp(8),
              width: hp(8),
              borderRadius: hp(5),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.Dark2,
              position: 'absolute',
              top: hp(-5),
              left: wp(5),
            }}
          >
            <CircularProgress
              value={(data.vote_average / 10) * 100}
              inActiveStrokeColor={'#2ecc71'}
              inActiveStrokeOpacity={0.2}
              textColor={'#fff'}
              valueSuffix={'%'}
              circleBackgroundColor={Colors.Dark2}
              radius={hp(4.5)}
            />
          </View>
          <Animated.View
            style={[
              {
                height: hp(18),
                width: '100%',
                paddingVertical: hp(2),
                paddingHorizontal: wp(2),
                // backgroundColor: 'red',
              },
              rTextStyle,
            ]}
          >
            <Text numberOfLines={3} style={styles.title}>
              {data.title}
            </Text>
            <Text style={styles.releasedate}>{data.release_date}</Text>
          </Animated.View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: hp(70),
    width: wp(80),
    alignItems: 'center',
    // justifyContent: 'flex-start',
    borderRadius: wp(5),
    marginHorizontal: wp(10),
    marginTop: hp(5),
  },
  image: {
    height: hp(55),
    width: wp(80),
    resizeMode: 'stretch',
    borderRadius: wp(4),
  },
  title: {
    fontSize: RFValue(18),
    color: '#000',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '100%',
    marginTop: hp(1.5),
  },
  releasedate: {
    fontSize: RFValue(15),
    color: Colors.Grey1,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '100%',
  },
});

export default Page;
