import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi component dinamis dengan state
      </Text>
      <Text style={styles.titleComponent}>Fuctional Components Hooks</Text>
      <Counter />
      <Counter />
      <Text style={styles.titleComponent}>Class Component</Text>
      <CounterClass />
      <CounterClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  titleComponent: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
