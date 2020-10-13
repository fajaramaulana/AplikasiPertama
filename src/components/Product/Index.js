import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from '../../assets/image/macbook.jpg';

const Product = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={macbook} style={styles.imageMac} />
      <Text style={styles.namaBarang}>New Macbook Pro 2019</Text>
      <Text style={styles.harga}>Rp. 25.000.000</Text>
      <Text style={styles.lokasi}>Jakarta Barat</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.bungkusButton}>
          <Text style={styles.buttonBuy}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 20,
    marginTop: 40,
  },
  imageMac: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  cardContainer: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    width: 212,
  },
  namaBarang: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  harga: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
    color: 'orange',
  },
  alamat: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
  },
  bungkusButton: {
    backgroundColor: '#6fcf97',
    borderRadius: 25,
    marginTop: 20,
    paddingVertical: 6,
  },
  buttonBuy: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
