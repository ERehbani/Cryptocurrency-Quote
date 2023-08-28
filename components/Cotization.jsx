import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Cotization({result}) {
  if (Object.keys(result).length === 0) return null;
  return (
    <View style={styles.result}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}>{result.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Precio mas alto del día
        <Text style={styles.span}> {result.HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Precio mas bajo del día
        <Text style={styles.span}> {result.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Variacion últimas 24 horas
        <Text style={styles.span}> {result.CHANGEPCT24HOUR}%</Text>
      </Text>
      <Text style={styles.text}>
        Última actualización
        <Text style={styles.span}> {result.LASTUPDATE}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    backgroundColor: '#5e49e2',
    padding: 20,
  },
  text: {
    color: 'white',
    fontFamily: 'Lato Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 38,
  },
  span: {
    fontFamily: 'Lato Black',
  },
});

export default Cotization;
