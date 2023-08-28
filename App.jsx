import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import Cotization from './components/Cotization';
import axios from 'axios';

const App = () => {
  const [coin, setCoin] = useState('');
  const [crypto, setCrypto] = useState('');
  const [consultAPI, setConsultAPI] = useState(false);
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizarCrypto = async () => {
      if (consultAPI) {
        // consultar la API para obtener la cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
        const result = await axios.get(url);

        setLoading(true);
        // Ocultar el spinner y mostrar el resultado
        setTimeout(() => {
          setResult(result.data.DISPLAY[crypto][coin]);
          setConsultAPI(false);
          setLoading(false);
        }, 3000);
      }
    };
    cotizarCrypto();
  }, [consultAPI]);

  return (
    <>
      <ScrollView>
        <View>
          <Header />
          <Image
            style={styles.image}
            source={require('./assets/img/cryptomonedas.png')}
          />
          <View style={styles.content}>
            <Form
              coin={coin}
              crypto={crypto}
              setCoin={setCoin}
              setCrypto={setCrypto}
              setConsultAPI={setConsultAPI}
            />
          </View>
        </View>
        <View style={{marginTop: 40}}>
          {loading ? (
            <ActivityIndicator size="large" color="#5e49e2" />
          ) : (
            <Cotization result={result} />
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 215,
  },
  content: {
    marginHorizontal: '2.5%',
  },
});

export default App;
