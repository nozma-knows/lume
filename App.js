import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native';
import Scan from './ble/scan';

export default function App() {
  const [scanning, setScanning] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    if (selectedDevice) {
      console.log('selectedDevice: ', selectedDevice.name);
    }
  }, [selectedDevice]);
  return (
    <SafeAreaView style={styles.AppView}>
      <View style={styles.TitleView}>
        <Text style={styles.Title}>Lume</Text>
      </View>
      <View style={styles.ScanView}>
        {selectedDevice ? (
          <Text>{selectedDevice.name}</Text>
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
      <View style={styles.NavBar}>
        <Text>Nav bar</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AppView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TitleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 40,
    fontWeight: 'bold',
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
  NavBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
