import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import MainTitle from '../ui/titles/mainTitle';
import Navbar from '../ui/navbar/navbar';

export default function Devices({navigation}) {
  const {devices} = useSelector(state => state.devices);
  return (
    <SafeAreaView style={styles.ScreenView}>
      <MainTitle />
      <View style={styles.DevicesView}>
        {devices.map(device => {
          return <Text>{device.name}</Text>;
        })}
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
  DevicesView: {
    flex: 8,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
