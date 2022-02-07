import { Colors } from '@app/config/theme';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import codePush from 'react-native-code-push';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };
const App = () => {
  useEffect(() => {
    codePush.sync(
      {
        installMode: codePush.InstallMode.IMMEDIATE,
      },
      status => {
        console.log(status);
      },
    );
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
      <Navigation />
    </SafeAreaView>
  );
};

export default codePush(codePushOptions)(App);
