import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: `https://api.adorable.io/avatars/150/${email}.png`,
        }}
        style={styles.avatar}
      />

      <View style={styles.desc}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.descName}>{name}</Text>
          <Text style={styles.descEmail}>{email}</Text>
          <Text style={styles.descBidang}>{bidang}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    if (button === 'Simpan') {
      Axios.post('http://10.0.2.2:3004/users', data).then((response) => {
        console.log('response simpan: ', response);
        setName('');
        setEmail('');
        setBidang('');
        getData();
      });
    } else if (button === 'Update') {
      Axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data).then(
        (response) => {
          console.log('response update: ', response);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        },
      );
    }
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then((response) => {
      console.log('response get data: ', response);
      setUsers(response.data);
    });
  };

  const selectItem = (item) => {
    console.log('selected item: ', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  const deleteItem = (item) => {
    console.log('item will be deleted', item);
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then((response) => {
      console.log('response deleted', response);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text styles={styles.textTitle}>Local API (JSON SERVER)</Text>
      <Text>Masukkan Anggota Member</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bidang"
        value={bidang}
        onChangeText={(value) => setBidang(value)}
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      {users.map((user) => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert('Peringatan', 'Anda yakin akan menghapus user ini?', [
                {text: 'Tidak', onPress: () => console.log('button Tidak')},
                {text: 'Ya', onPress: () => deleteItem(user)},
              ])
            }
          />
        );
      })}
    </View>
  );
};

export default LocalAPI;

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
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 20,
    paddingLeft: 25,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  desc: {
    marginLeft: 18,
    justifyContent: 'center',
    flex: 1,
  },
  descName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descEmail: {
    fontSize: 16,
  },
  descBidang: {
    fontSize: 12,
    marginTop: 8,
  },
  delete: {
    fontSize: 25,
    top: 15,
    fontWeight: 'bold',
    color: 'red',
  },
});
