// import { useTheme } from 'styled-components';
import {Colors} from '@app/theme';
import React from 'react';
import {Appbar} from 'react-native-paper';

function GenericAppBar({headerTitle}: {headerTitle: string}) {
  // const theme = useTheme();

  // const {
  //   descriptor: {
  //     options: { headerTitle },
  //   },
  // } = scene;

  // const onSubmit = () => {
  //   navigation.navigate('SearchScreen', {
  //     searchString: 'Physics',
  //   });
  // };

  return (
    <Appbar style={{backgroundColor: Colors.light4, elevation: 4}}>
      <Appbar.Content
        accessibilityComponentType
        accessibilityTraits
        title={headerTitle}
      />

      <Appbar.Action
        accessibilityComponentType
        accessibilityTraits
        icon="magnify"
        onPress={
          () => {
            console.log('Search');
          }
          // navigation.navigate('NotificationScreen')
        }
      />

      <Appbar.Action
        accessibilityComponentType
        accessibilityTraits
        icon="bell"
        onPress={
          () => {
            console.log('Notification');
          }
          // navigation.navigate('NotificationScreen')
        }
      />
    </Appbar>
  );
}

export default GenericAppBar;
