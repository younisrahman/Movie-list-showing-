import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import { Page } from '@app/components';
import { useAppDispatch } from '@app/store/store';
import { getPopularMovie, getLatestMovie } from '@app/features/Movie/reducer';
import { RootState } from '@app/store/root-reducer';
import { Colors, FontFamily } from '@app/config/theme';
import { BodyMedium } from '@app/styles/typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = () => {
  let animation = React.createRef();
  const dispatch = useAppDispatch();
  const { popularMovie } = useSelector((state: RootState) => state.movies);

  const translateX = useSharedValue(0);

  useEffect(() => {
    if (!popularMovie) {
      animation.current.play();
    }
  }, []);
  useEffect(() => {
    (async () => {
      await dispatch(getPopularMovie());
      await dispatch(getLatestMovie());
    })();
  }, []);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      pagingEnabled
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      horizontal
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      {!popularMovie ? (
        <View
          style={{
            height: hp(50),
            width: wp(100),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LottieView
            ref={animation}
            style={{
              width: 350,
              height: 350,
            }}
            source={require('../../assets/01.json')}
          />
          <BodyMedium style={{ fontFamily: FontFamily.RubikB }}>
            Loading ...
          </BodyMedium>
        </View>
      ) : (
        popularMovie?.results?.map((movie, index) => {
          return (
            <Page
              key={index.toString()}
              data={movie}
              index={index}
              translateX={translateX}
            />
          );
        })
      )}
    </Animated.ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Grey4,
  },
});
export default HomeScreen;
