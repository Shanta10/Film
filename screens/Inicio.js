import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button'; // Importa el componente Button

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
      <Text style={styles.title}>¡Bienvenidos/as!</Text>
      <Button title="Ver películas" onPress={() => navigation.navigate('Films')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Inicio;
