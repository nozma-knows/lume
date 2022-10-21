import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Navbar from '../ui/navbar/navbar';

export default function Controller({navigation}) {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Controller</Text>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
}
