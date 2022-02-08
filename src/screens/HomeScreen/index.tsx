import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { Page, LoadMore } from '@app/components';
import { useAppDispatch } from '@app/store/store';
import { getPopularMovie, getLatestMovie } from '@app/features/Movie/reducer';
import { RootState } from '@app/store/root-reducer';
import { Colors } from '@app/config/theme';

// https://www.themoviedb.org/t/p/w600_and_h900_bestv2/k0ThmZQl5nHe4JefC2bXjqtgYp0.jpg
const WORDS = ["What's", 'up', 'dude', 'how', 'are', 'you', 'doing'];

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { latestMovie, popularMovie } = useSelector(
    (state: RootState) => state.movies,
  );

  console.log('latestMovie====================================');
  console.log(latestMovie);
  console.log(popularMovie);
  console.log('====================================popularMovie');
  const translateX = useSharedValue(0);

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
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {WORDS.map((title, index) => {
        return (
          <Page
            key={index.toString()}
            title={title}
            index={index}
            translateX={translateX}
            // style={{ marginLeft: index === 0 ? wp(5) : 0 }}
          />
        );
      })}
      <LoadMore
        key={99999}
        translateX={translateX}
        // style={{ marginLeft: index === 0 ? wp(5) : 0 }}
      />
    </Animated.ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.White,
  },
});
export default HomeScreen;
