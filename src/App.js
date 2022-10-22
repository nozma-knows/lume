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
