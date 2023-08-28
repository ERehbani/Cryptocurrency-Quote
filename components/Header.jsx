import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';

function Header() {
  return (
    <View>
      <Text style={styles.header}>Critomonedas</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    backgroundColor: '#5e49e2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#fff',
    marginBottom: 30,
    fontFamily: 'Lato Black',
  },
});

export default Header;
