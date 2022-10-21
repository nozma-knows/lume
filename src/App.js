/* eslint-disable react-native/no-inline-styles */
import React from 'react';

// Redux
import {Provider} from 'react-redux';
import store from './redux/store';

// React navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Scanner from './screens/Scanner';
import Devices from './screens/Devices';
import Controller from './screens/Controller';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Scanner"
          screenOptions={{
            headerShown: false,
            animation: 'none',
          }}>
          <Stack.Screen name="Scanner" component={Scanner} />
          <Stack.Screen name="Controller" component={Controller} />
          <Stack.Screen name="Devices" component={Devices} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
//   AppView: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   TitleView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   Title: {
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
//   ScanView: {
//     flex: 8,
//     width: '100%',
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   ScanButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'blue',
//     width: 150,
//     height: 150,
//     borderRadius: 150,
//   },
//   ScanButtonText: {
//     fontSize: 40,
//     color: 'white',
//   },
//   NavBar: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
