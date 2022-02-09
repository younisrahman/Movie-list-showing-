import React, { useEffect } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { BodyMedium } from '@app/styles/typography';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { FontFamily } from '@app/config/theme';

const LoadingModal = () => {
  let animation = React.createRef();
  useEffect(() => {
    // if (!popularMovie) {
    animation.current.play();
    // }
  }, []);
  return (
    <View
      style={{
        height: hp(80),
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
  );
};

export default LoadingModal;
