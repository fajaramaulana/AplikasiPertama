import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Illustration from '../../assets/image/illustration.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Meggunakan SVG File di React Native
      </Text>
      <Illustration width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
