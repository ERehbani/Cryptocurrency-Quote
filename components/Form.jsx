import {Picker} from '@react-native-picker/picker';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import axios from 'axios';

function Form({coin, crypto, setCoin, setCrypto, setConsultAPI}) {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios(url);
      setCryptos(result.data.Data);
    };
    consultAPI();
  }, []);

  //   Almacena las selecciones del usuario
  const obtainCoin = coin => {
    setCoin(coin);
  };

  const obtainCrypto = crypto => {
    setCrypto(crypto);
  };

  const cotizarPrice = () => {
    if (coin.trim() === '' || crypto.trim() === '') {
      showAlert();
      return;
    }
    setConsultAPI(true);
  };

  const showAlert = () => {
    Alert.alert('Error...', 'Ambos campos son obligatorios', [{text: 'OK'}]);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker selectedValue={coin} onValueChange={coin => obtainCoin(coin)}>
        <Picker.Item label="- Seleccione - " value="" />
        <Picker.Item label="Dolar Estadounidense" value="USD" />
        <Picker.Item label="Peso Argentino" value="ARS" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
        <Picker.Item label="Euro" value="EUR" />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        selectedValue={crypto}
        onValueChange={crypto => obtainCrypto(crypto)}>
        <Picker.Item label="- Seleccione - " value="" />
        {cryptos.map(crypto => (
          <Picker.Item
            key={crypto.CoinInfo.Id}
            label={crypto.CoinInfo.FullName}
            value={crypto.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight
        style={styles.buttonCotizar}
        onPress={() => cotizarPrice()}>
        <Text style={styles.buttonText}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
    color: 'black',
  },
  buttonCotizar: {
    backgroundColor: '#5e49e2',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Lato Black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Form;
