import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { Page } from '@app/components';
import { RootState } from '@app/store/root-reducer';
import { Colors } from '@app/config/theme';

const LatestScreen = () => {
  const { latestMovie } = useSelector((state: RootState) => state.movies);
  const movies = [latestMovie];

  const translateX = useSharedValue(0);

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
      {movies.map((movie, index) => {
        return (
          <Page
            key={index.toString()}
            data={movie}
            index={index}
            translateX={translateX}
            // style={{ marginLeft: index === 0 ? wp(5) : 0 }}
          />
        );
      })}
    </Animated.ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.Grey4,
  },
});
export default LatestScreen;
