import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Footer() {
  return (
    <View style={styles.HeaderView}>
      <Pressable onPress={() => console.log('Pressed Add Button.')}>
        <MaterialCommunityIcon
          style={styles.Button}
          name="lightbulb-group-outline"
        />
      </Pressable>
      <MaterialCommunityIcon
        style={styles.Button}
        name="controller-classic-outline"
      />
      <FeatherIcon style={styles.Button} name="settings" />
    </View>
  );
}
const styles = StyleSheet.create({
  HeaderView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    height: 40,
    backgroundColor: 'lightblue',
  },
  Button: {
    fontSize: 30,
    paddingHorizontal: 10,
  },
  Title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
