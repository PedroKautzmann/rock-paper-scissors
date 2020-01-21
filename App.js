import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Logic from './src/components/Logic';
import Header from './src/components/Header';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.main}>
        <Header />

        <Logic />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
