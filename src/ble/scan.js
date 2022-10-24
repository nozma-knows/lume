import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import {BleManager} from 'react-native-ble-plx';

export const manager = new BleManager();

// Services expected for connected device
const expectedServices = ['0000180a-0000-1000-8000-00805f9b34fb'];

// Function to scan for BLE devices
const scanning = (selectedDevice, discoveredDevices, setDiscoveredDevices) => {
  // Scan for BLE devices
  manager.startDeviceScan(expectedServices, null, (error, device) => {
    if (error) {
      console.log('Error: ', error);
      return;
    }
    if (
      !discoveredDevices.some(item => item.id === device.id) &&
      device.name !== null
    ) {
      setDiscoveredDevices(devices => [...devices, device]);
    }
    if (selectedDevice) {
      manager.stopDeviceScan();
    }
  });
};

export default function Scan({setScanning, selectedDevice, setSelectedDevice}) {
  const [discoveredDevices, setDiscoveredDevices] = useState([]);

  // Start scanning
  scanning(selectedDevice, discoveredDevices, setDiscoveredDevices);

  // Render device in flat list
  const renderDevice = ({item}) => (
    <Pressable style={styles.Device} onPress={() => setSelectedDevice(item)}>
      <Text style={styles.DeviceTitle}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.ScanView}>
      <Pressable
        style={styles.StopScanButton}
        onPress={() => setScanning(false)}>
        <Text style={styles.StopScanButtonText}>Stop Scanning</Text>
      </Pressable>
      <View style={styles.DeviceList}>
        <FlatList
          key={device => device.uuid}
          data={discoveredDevices}
          renderItem={renderDevice}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ScanView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  StopScanButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 150,
    height: 40,
    borderRadius: 75,
    marginBottom: 20,
  },
  StopScanButtonText: {
    fontSize: 20,
    color: 'white',
  },
  DeviceList: {
    flex: 1,
    width: '100%',
    padding: 20,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 15,
  },
  Device: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 15,
    margin: 5,
  },
  DeviceTitle: {
    color: 'white',
  },
});
