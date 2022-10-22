/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native';
import Scan from './../ble/scan';
import DeviceSetup from './../ble/deviceSetup';
import MainTitle from '../ui/titles/mainTitle';
import Navbar from '../ui/navbar/navbar';

export default function Scanner({navigation}) {
  const [scanning, setScanning] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [servicesDiscovered, setServicesDiscovered] = useState(false);

  // When device is selected, discover services and characteristics
  useEffect(() => {
    if (selectedDevice) {
      selectedDevice
        .connect()
        .then(device => {
          return device.discoverAllServicesAndCharacteristics();
        })
        .then(() => setServicesDiscovered(true))
        .catch(error =>
          console.log(
            'Error discovering services and characteristics: ',
            error,
          ),
        );
    }
  }, [selectedDevice]);

  return (
    <SafeAreaView style={styles.AppView}>
      <MainTitle />
      <View style={styles.ScanView}>
        {selectedDevice ? (
          <View style={{flex: 1, width: '100%'}}>
            {servicesDiscovered ? (
              <DeviceSetup device={selectedDevice} />
            ) : (
              <Text>Loading device</Text>
            )}
          </View>
        ) : (
          <View style={styles.ScanView}>
            {scanning ? (
              <Scan
                setScanning={setScanning}
                selectedDevice={selectedDevice}
                setSelectedDevice={setSelectedDevice}
              />
            ) : (
              <Pressable
                style={styles.ScanButton}
                onPress={() => setScanning(true)}>
                <Text style={styles.ScanButtonText}>Scan</Text>
              </Pressable>
            )}
          </View>
        )}
      </View>
      <Navbar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AppView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ScanView: {
    flex: 8,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScanButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  ScanButtonText: {
    fontSize: 40,
    color: 'white',
  },
});
