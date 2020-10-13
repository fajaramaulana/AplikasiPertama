import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// primitive
const nama = 'Fajar Agus Maulana';
let usia = 23;
const apakahLakiLaki = true;

// complex
const hewanPeliharaan = {
  nama: 'Teh',
  jenis: 'kucing',
  usia: 2,
  apakahHewanLokal: true,
  warna: 'grey',
  induk: {
    jantan: 'Buluk',
    betina: 'Katy',
    rumah: {
      alamat1: 'Buluk',
      kantor: 'jakarta',
    },
  },
}; // object

// const sapaOrang = () => {
//   return console.log('hello ....');
// }; // function

// sapaOrang('Fajar', 24);

const namaOrang = ['Fajar', 'agus', 'maulana']; //object - array

typeof namaOrang; // object

const sapaHewan = (objectHewan) => {
  //   let sapaHewan = '';

  //   if (objectHewan.induk.rumah.alamat1 === 'jakarta') {
  //     sapaHewan = 'Hallo Apa kabar?';
  //   } else {
  //     sapaHewan = 'Kamu siapa?';
  //   }
  //   return sapaHewan;

  return objectHewan.induk.jantan === objectHewan.induk.jantan
    ? 'Halo apa kabar ?'
    : 'Kamu siapa?';
};

const BasicJavascript = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic Javascript di React Native
      </Text>
      <Text>Nama : {nama}</Text>
      <Text>Usia : {usia}</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      {namaOrang.map((orang) => {
        return <Text>{orang}</Text>;
      })}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
