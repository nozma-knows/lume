import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function Page() {
  return (
    <SafeAreaView style={styles.PageView}>
      <Header />
      {/* <View>{Content()}</View> */}
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  PageView: {
    flex: 1,
  },
});
