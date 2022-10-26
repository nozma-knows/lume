import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, View, Text, Pressable, StyleSheet} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import base64 from 'react-native-base64';
// import LinearGradient from 'react-native-linear-gradient';
import MainTitle from '../ui/titles/mainTitle';
import Navbar from '../ui/navbar/navbar';

// const colors = [
//   '#FF0000',
//   '#FF8000',
//   '#FFFF00',
//   '#80ff00',
//   '#00FF00',
//   '#00ff80',
//   '#00ffff',
//   '#0080ff',
//   '#0000ff',
//   '#8000ff',
//   '#ff00ff',
//   '#ff0080',
//   '#FF0000',
// ];

const CheckIsConnected = async device => {
  const connected = await device.isConnected();
  if (!connected) {
    device
      .connect()
      .then(item => {
        return item.discoverAllServicesAndCharacteristics();
      })
      .catch(error => console.log('Error reconnecting to device: ', error));
  }
};

export default function Controller({navigation}) {
  // Grab devices from store
  const {devices} = useSelector(state => state.devices);
  const light = devices[0].details;
  CheckIsConnected(light);
  // console.log('lightConnected: ', lightConnected);
  // Variables for setting LED color
  const [currentColor, setCurrentColor] = useState();
  const [selectedColor, setSelectedColor] = useState();

  useEffect(() => {
    if (selectedColor) {
      console.log(
        'REACT_APP_LED_SERVICE_UUID: ',
        process.env.REACT_APP_LED_SERVICE_UUID,
      );
      const color = selectedColor.replace('#', '0x');
      light
        .writeCharacteristicWithResponseForService(
          '0000180a-0000-1000-8000-00805f9b34fb',
          '00002598-0000-1000-8000-00805f9b34fb',
          base64.encode(color),
        )
        .then(characteristic =>
          console.log('Characteristic written to: ', characteristic.uuid),
        )
        .catch(error => console.log('Error writting characteristic: ', error));
    }
  }, [selectedColor, light]);

  return (
    <SafeAreaView style={styles.ScreenView}>
      <MainTitle />
      <View style={styles.ControllerView}>
        <View style={styles.ColorPicker}>
          {/* <LinearGradient
            style={styles.LinearGradient}
            colors={colors}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          /> */}
          <ColorPicker
            color={currentColor}
            onColorChangeComplete={color =>
              setCurrentColor(color.toUpperCase())
            }
            thumbSize={40}
            sliderSize={20}
            noSnap={true}
            row={false}
            swatches={false}
            swatchesLast={false}
            sliderHidden={true}
          />
          <Pressable
            style={{
              ...styles.SetColorButton,
              backgroundColor: `${currentColor}`,
            }}
            onPress={() => setSelectedColor(currentColor)}>
            <Text style={styles.SetColorButtonText}>Set Color</Text>
          </Pressable>
          <View style={styles.ColorDisplay}>
            <Text>{`Current Color is - ${currentColor}`}</Text>
            <Text>{`Selected Color is - ${selectedColor}`}</Text>
          </View>
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
  ControllerView: {
    flex: 8,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColorPicker: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  LinearGradient: {
    // flex: 1,
    height: 20,
    borderRadius: 10,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  SetColorButton: {
    alignSelf: 'center',
    width: 120,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  SetColorButtonText: {
    fontSize: 20,
    textAlign: 'center',
  },
  ColorDisplay: {
    alignSelf: 'center',
  },
});
