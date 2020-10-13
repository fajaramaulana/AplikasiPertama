import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallApiVanillaJs = () => {
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
  //   useEffect(() => {
  // // Call API dengan method GET
  // fetch('https://reqres.in/api/users/2')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  //     // CALL API dengan method POST
  //     const dataForAPI = {
  //       name: 'Fajar',
  //       job: 'banyak dah apa aja disuruh',
  //     };

  //     console.log('data object : ', dataForAPI);
  //     console.log('data bentuk stringify: ', JSON.stringify(dataForAPI));
  //     fetch('https://reqres.in/api/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(dataForAPI),
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log('post response: ', json);
  //       });
  //   }, []);
  const getData = () => {
    fetch('https://reqres.in/api/users/3')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'Fajar',
      job: 'apa aja',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('post response: ', json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Call API Vanilla JS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text style={styles.responseGetData}>Response GET DATA</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
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

export default CallApiVanillaJs;

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
