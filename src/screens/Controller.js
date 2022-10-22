import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import MainTitle from '../ui/titles/mainTitle';
import Navbar from '../ui/navbar/navbar';

export default function Controller({navigation}) {
  return (
    <SafeAreaView style={styles.ScreenView}>
      <MainTitle />
      <View style={styles.ControllerView}>
        <Text>Controller</Text>
      </View>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ScreenView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ControllerView: {
    flex: 8,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
