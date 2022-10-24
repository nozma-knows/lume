import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import MainTitle from '../ui/titles/mainTitle';
import Navbar from '../ui/navbar/navbar';

const Device = ({device}) => {
  const {name} = device.item;
  return (
    <View style={styles.DeviceView}>
      <Text style={styles.DeviceTitle}>{name}</Text>
    </View>
  );
};

export default function Devices({navigation}) {
  const {devices} = useSelector(state => state.devices);

  const renderDevice = device => <Device device={device} />;

  return (
    <SafeAreaView style={styles.ScreenView}>
      <MainTitle />
      <View style={styles.DevicesView}>
        <View style={styles.DevicesList}>
          <FlatList
            data={devices}
            renderItem={renderDevice}
            keyExtractor={item => item.id}
          />
        </View>
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
  DevicesList: {
    flex: 1,
    width: '100%',
  },
  DeviceView: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'black',
  },
  DeviceTitle: {
    fontSize: 20,
  },
});
