import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
    <View style={styles.HeaderView}>
      <Pressable onPress={() => console.log('Pressed Add Button.')}>
        <Icon style={styles.AddButton} name="add" />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  HeaderView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    width: '100%',
    height: 40,
    backgroundColor: 'lightblue',
  },
  AddButton: {
    fontSize: 30,
  },
  Title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
