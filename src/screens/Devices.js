import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  StyleSheet,
} from 'react-native';
import Header from '../ui/header/header';
import Footer from '../ui/footer/footer';
import Navbar from '../ui/navbar/navbar';

const Device = ({device, setDeviceOpen}) => {
  const {name} = device.item;
  console.log('device: ', device.item.name);
  return (
    <Pressable style={styles.DeviceView} onPress={() => setDeviceOpen(device)}>
      <Text style={styles.DeviceTitle}>{name}</Text>
    </Pressable>
  );
};

export default function Devices({navigation}) {
  const {devices} = useSelector(state => state.devices);
  const [deviceOpen, setDeviceOpen] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  console.log('devices: ', devices);
  const renderDevice = device => (
    <Device device={device} setDeviceOpen={setDeviceOpen} />
  );

  useEffect(() => {
    console.log('deviceOpen: ', deviceOpen ? 'true' : 'false');
  }, [deviceOpen]);
  // return (
  //   <SafeAreaView style={styles.ScreenView}>
  //     <Modal animationType="slide" visible={deviceOpen !== null}>
  //       <View style={styles.centeredView}>
  //         <View style={styles.modalView}>
  //           <Text style={styles.modalText}>
  //             {deviceOpen ? deviceOpen.item.name : null}
  //           </Text>
  //           <Pressable
  //             style={[styles.button, styles.buttonClose]}
  //             onPress={() => setDeviceOpen(null)}>
  //             <Text style={styles.textStyle}>Hide Modal</Text>
  //           </Pressable>
  //         </View>
  //       </View>
  //     </Modal>
  //     <Header />
  //     <View style={styles.DevicesView}>
  //       <View style={styles.DevicesList}>
  //         {devices.length ? (
  //           <FlatList
  //             data={devices}
  //             renderItem={renderDevice}
  //             keyExtractor={item => item.id}
  //           />
  //         ) : (
  //           <View style={styles.NoDevices}>
  //             <Text style={styles.NoDevicesText}>No Devices</Text>
  //           </View>
  //         )}
  //       </View>
  //     </View>
  //     <Navbar navigation={navigation} />
  //   </SafeAreaView>
  // );
  return (
    <SafeAreaView style={styles.ScreenView}>
      <Header />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ScreenView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 250,
    height: 400,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
    borderRadius: 10,
    backgroundColor: 'black',
  },
  DeviceView: {
    flex: 1,
    padding: 15,
    margin: 4,
    // marginBottom: 5,
    borderRadius: 8,
    // borderWidth: 4,
    // borderColor: 'black',
    backgroundColor: 'white',
  },
  DeviceTitle: {
    fontSize: 20,
  },
  NoDevices: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NoDevicesText: {
    fontSize: 20,
    color: 'white',
  },
});
