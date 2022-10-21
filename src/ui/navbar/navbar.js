import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

// Navbar on bottom of the screen
export default function Navbar({navigation}) {
  return (
    <View style={styles.NavBar}>
      <Pressable
        style={styles.NavBarButton}
        onPress={() => navigation.replace('Controller')}>
        <Text style={styles.NavBarButtonText}>Controller</Text>
      </Pressable>
      <Pressable
        style={styles.NavBarButton}
        onPress={() => navigation.replace('Scanner')}>
        <Text style={styles.NavBarButtonText}>Scanner</Text>
      </Pressable>
      <Pressable
        style={styles.NavBarButton}
        onPress={() => navigation.replace('Devices')}>
        <Text style={styles.NavBarButtonText}>Devices</Text>
      </Pressable>
    </View>
  );
}

// Navbar styles
const styles = StyleSheet.create({
  NavBar: {
    flex: 1,
    paddingHorizontal: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  NavBarButton: {
    alignItems: 'center',
    width: 85,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  NavBarButtonText: {
    color: 'white',
  },
});
