import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallApiAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    Axios.get('https://reqres.in/api/users/3')
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => console.log('err', err));
  };

  const postData = () => {
    const dataForAPI = {
      name: 'Fajar',
      job: 'apa aja',
    };

    Axios.post('https://reqres.in/api/users', dataForAPI)
      .then((result) => {
        console.log('res :', result);
        setDataJob(result.data);
      })
      .catch((err) => console.log('err : ', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Call API Axios</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text style={styles.responseGetData}>Response GET DATA</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button marginVertical={10} title="POST DATA" onPress={postData} />
      <Text style={styles.responseGetData}>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default CallApiAxios;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  responseGetData: {
    marginVertical: 10,
  },
  avatar: {width: 100, height: 100, borderRadius: 100 / 2},
});
