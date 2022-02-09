import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GenericAppBar } from '@app/components/AppBar';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@app/store/store';
import { movieDetails } from '@app/features/Movie/reducer';
import { RootState } from '@app/store/root-reducer';
import { Colors, FontFamily, Padding } from '@app/config/theme';
import { BodyLarge, BodyMedium } from '@app/styles/typography';
import { ShowData } from '@app/components';

const MovieDetailsScreen = ({
  route: {
    params: { data },
  },
}) => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  const { movieFullDetails } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    (async () => {
      await dispatch(movieDetails(data.id));
    })();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: props => (
        <GenericAppBar
          {...props}
          headerTitle={data.title ?? 'Movie Details Screen'}
          isBackButton={true}
        />
      ),
    });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: hp(10) }}
    >
      {movieFullDetails?.id === data?.id ? (
        <>
          <Image
            source={{
              uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`,
            }}
            style={[styles.image]}
          />
          <BodyLarge numberOfLines={4} style={styles.title}>
            {data.title}
          </BodyLarge>
          <View>
            <ShowData
              title="Release Date"
              info={movieFullDetails.release_date}
              margintop={hp(2)}
            />

            <ShowData
              title="Runtime"
              info={`${movieFullDetails.runtime} min`}
              margintop={hp(2)}
            />
            <ShowData
              title="Genre"
              info={movieFullDetails.genres.map(genre => genre.name).join(', ')}
              margintop={hp(2)}
            />
            <ShowData
              title="Tagline"
              info={movieFullDetails.tagline}
              margintop={hp(2)}
            />

            <BodyLarge
              style={{ fontFamily: FontFamily.RubikB, marginTop: hp(2) }}
            >
              Overview
            </BodyLarge>
            <BodyMedium>{movieFullDetails.overview}</BodyMedium>

            <ShowData
              title="Status"
              info={movieFullDetails.status}
              margintop={hp(2)}
            />
            <ShowData
              title="Original Language"
              info={movieFullDetails.original_language}
              margintop={hp(2)}
            />
            <ShowData
              title="Budget"
              info={movieFullDetails.budget}
              margintop={hp(2)}
            />
            <ShowData
              title="Revenue"
              info={movieFullDetails.revenue}
              margintop={hp(2)}
            />
            <TouchableOpacity
              style={{
                marginTop: hp(2),
                backgroundColor: Colors.Black,
                width: wp(40),
                height: hp(4),
                borderRadius: hp(2),
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                Linking.openURL(
                  movieFullDetails.homepage ?? 'https://www.themoviedb.org/',
                );
              }}
            >
              <BodyMedium
                style={{ color: Colors.White, fontFamily: FontFamily.RubikB }}
              >
                Visit
              </BodyMedium>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Image
            source={{
              uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`,
            }}
            style={[
              styles.image,
              // { backgroundColor: `rgba(150,25,250,.${index + 2})` },
            ]}
          />
          <BodyLarge numberOfLines={4} style={styles.title}>
            {data.title}
          </BodyLarge>
          <BodyMedium>{data.overview}</BodyMedium>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(2),
    paddingHorizontal: Padding.paddingHorizontal,
  },
  image: {
    height: hp(55),
    width: wp(80),
    marginHorizontal: wp(5.5),
    resizeMode: 'cover',
    borderRadius: wp(4),
  },
  title: {
    fontSize: RFValue(20),
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

export default MovieDetailsScreen;
