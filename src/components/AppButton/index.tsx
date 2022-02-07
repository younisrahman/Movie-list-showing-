import React from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, FontFamily, FontSize } from '@app/config/theme';
import { H7 } from '@app/styles/typography';

interface AppButtonProp {
  textStyle?: any;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  children?: any;
  isBorder?: boolean;
  isSkip?: boolean;
}
// LoginRegisterButton
const CustomButton: React.FC<AppButtonProp> = ({
  style,
  onPress,
  children,
  isBorder = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.loginRegisterButtonProceed,
        isBorder === true
          ? { backgroundColor: Colors.light4 }
          : { backgroundColor: Colors.primaryPurple },
        style,
      ]}
    >
      <H7
        style={[
          styles.textChildrenStyling,
          // style,
          isBorder ? { color: Colors.primaryPurple } : { color: Colors.light4 },
        ]}
      >
        {children}
      </H7>
    </TouchableOpacity>
  );
};

// CircleButton
const CircleButton: React.FC<AppButtonProp> = ({
  style,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.circleButtonProceed, style]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginRegisterButtonProceed: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(90),
    height: hp(7),
    borderRadius: hp(1.2),
    // backgroundColor: Colors.primaryPurple,
  },
  circleButtonProceed: {
    height: hp(7.5),
    width: hp(7.5),
    backgroundColor: Colors.primaryPurple,
    borderRadius: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  textChildrenStyling: {
    color: Colors.light4,
    fontFamily: FontFamily.RubikR,
    fontSize: FontSize.M,
  },
});

export { CustomButton, CircleButton };

// export default TestButton;
