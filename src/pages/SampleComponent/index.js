import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#3498db'}} />
      <Text>Fajar</Text>
      <Agus />
      <Text>Agus</Text>
      <Text>Maulana</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Agus = () => {
  return <Text>Fajar Agus Maulana</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/arch'}}
          style={{width: 100, height: 100, borderRadius: 20}}
        />
        <Text style={{fontSize: 30}}>ini lorong</Text>
      </View>
    );
  }
}

export default SampleComponent;
