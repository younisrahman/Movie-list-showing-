import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  StyleProp,
  ViewStyle,
} from 'react-native';
// import { CircleButton } from '@app/components';
// import FontAwsome from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Shadow } from '@app/styles/shadow';
import { H7 } from '@app/styles/typography';
import { Colors, Padding } from '@app/theme';

interface nameStyling {
  titleName?: string;
  style?: StyleProp<ViewStyle>;
  placeHolderText: string;
}

const AppInputDemo: React.FC<nameStyling> = ({
  titleName,
  style,
  placeHolderText,
}) => {
  return (
    <View style={styles.TextInputContainer}>
      <H7 style={styles.textStyling}>{titleName}</H7>
      <TextInput
        style={[styles.firstTextInputStyling, style, Shadow.shadow]}
        placeholder={placeHolderText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  TextInputContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    minHeight: hp(7.2),
    width: '100%',
    borderRadius: hp(1.5),
    marginVertical: hp(1),
  },
  textStyling: {
    color: Colors.primaryPurple,
    fontFamily: 'Inter',
  },
  firstTextInputStyling: {
    minHeight: hp(5),
    width: '100%',
    borderRadius: wp(2),
    backgroundColor: Colors.light3,
    paddingHorizontal: Padding.paddingHorizontal,
    marginVertical: hp(1),
  },
});
export default AppInputDemo;
