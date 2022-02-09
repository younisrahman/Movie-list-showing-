import React from 'react';
import { Appbar } from 'react-native-paper';
import { Colors, FontFamily, FontSize } from '@app/theme';
import { useNavigation } from '@react-navigation/native';

interface GenericAppBarprops {
  headerTitle: string;
  isBackButton?: boolean;
}

function GenericAppBar({
  headerTitle,
  isBackButton = false,
}: GenericAppBarprops) {
  const navigation = useNavigation();
  return (
    <Appbar style={{ backgroundColor: Colors.White, elevation: 4 }}>
      {isBackButton && (
        <Appbar.BackAction
          color={Colors.Black}
          onPress={() => {
            navigation.goBack();
          }}
        />
      )}

      <Appbar.Content
        titleStyle={{
          color: Colors.Black,
          fontFamily: FontFamily.RubikB,
          fontSize: FontSize.L,
          fontWeight: '600',
        }}
        title={headerTitle}
      />
      {!isBackButton && (
        <>
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="bell" />
        </>
      )}
    </Appbar>
  );
}

export default GenericAppBar;
