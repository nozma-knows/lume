/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, View, Text, TextInput, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateDevices} from './../redux/devicesSlice';

const saveDeviceDetails = (dispatch, device, name, location) => {
  const data = {
    id: device.id,
    name,
    location,
  };
  dispatch(updateDevices(data));
  return null;
};

export default function DeviceSetup({device}) {
  const dispatch = useDispatch();
  const devices = useSelector(state => state.devices);
  console.log('deviceSetup: ', devices);
  const [nameFieldSelected, setNameFieldSelected] = useState(false);
  const [locationFieldSelected, setLocationFieldSelected] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          padding: 20,
        }}>
        <Text
          style={{
            paddingBottom: 20,
            textAlign: 'center',
            fontSize: 40,
          }}>
          Device Setup
        </Text>
        <View>
          <Text
            style={{
              paddingLeft: 10,
              paddingBottom: 5,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Name
          </Text>
          <TextInput
            style={{
              width: '100%',
              padding: nameFieldSelected ? 18 : 20,
              marginBottom: 20,
              borderRadius: 10,
              fontSize: 18,
              borderWidth: nameFieldSelected ? 4 : 2,
            }}
            onFocus={() => setNameFieldSelected(true)}
            onBlur={() => setNameFieldSelected(false)}
            onChangeText={setName}
            value={name}
            placeholder="Give this device a name!"
          />
        </View>
        <View>
          <Text
            style={{
              paddingLeft: 10,
              paddingBottom: 5,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Location
          </Text>
          <TextInput
            style={{
              width: '100%',
              padding: locationFieldSelected ? 18 : 20,
              marginBottom: 20,
              borderRadius: 10,
              fontSize: 18,
              borderWidth: locationFieldSelected ? 4 : 2,
            }}
            onFocus={() => setLocationFieldSelected(true)}
            onBlur={() => setLocationFieldSelected(false)}
            onChangeText={setLocation}
            value={location}
            placeholder="Set the devices location"
          />
        </View>
        <Pressable
          style={{
            padding: 20,
            backgroundColor: 'black',
            borderRadius: 10,
            transform: buttonPressed ? [{scale: 0.95}] : [{scale: 1}],
            // scale: buttonPressed ? '1.2' : '1',
          }}
          onPressIn={() => setButtonPressed(true)}
          onPressOut={() => setButtonPressed(false)}
          onPress={() => saveDeviceDetails(dispatch, device, name, location)}>
          <Text style={{color: 'white', textAlign: 'center'}}>Save Device</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
