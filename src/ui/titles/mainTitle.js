import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MainTitle() {
  return (
    <View style={styles.TitleView}>
      <Text style={styles.Title}>Lume</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TitleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
