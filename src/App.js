/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
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
