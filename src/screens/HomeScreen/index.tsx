import React, { useEffect } from 'react';
import { StyleSheet, Modal } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { Page } from '@app/components';
import { useAppDispatch } from '@app/store/store';
import { getPopularMovie, getLatestMovie } from '@app/features/Movie/reducer';
import { RootState } from '@app/store/root-reducer';
import { Colors } from '@app/config/theme';
import LoadingModal from './LoadingModal';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { popularMovie } = useSelector((state: RootState) => state.movies);

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
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={popularMovie}
        onRequestClose={() => {}}
      >
        <LoadingModal />
      </Modal>
      {popularMovie?.results?.map((movie, index) => {
        return (
          <Page
            key={index.toString()}
            data={movie}
            index={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Grey4,
  },
});
export default HomeScreen;
