import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cards from '../components/Cards';
import Icon from 'react-native-vector-icons/FontAwesome';

const Films = () => {
  const navigation = useNavigation();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    // Obtener todos los films
    fetch('http://localhost:8080/film')
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.error('Error fetching films:', error));
  }, []);

  const navigateToScenes = async (filmId) => {
    try {
      // Obtener solo las escenas del film seleccionado
      const scenesResponse = await fetch(`http://localhost:8080/scene?filmId=${filmId}`);
      const scenesData = await scenesResponse.json();
      navigation.navigate('Scenes', { scenes: scenesData });
    } catch (error) {
      console.error('Error navigating to scenes:', error);
    }
  };
  
  

  return (
    <View style={styles.container}>
      <ScrollView>
        {films.map(film => (
          <TouchableOpacity
            key={film.id}
            onPress={() => navigateToScenes(film.id)}
          >
            <Cards
              title={film.title}
              subtitle1={`Director: ${film.director}`}
              subtitle2={`Duración: ${film.duration} minutos`}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('FilmsSet')}
      >
        <Icon name="plus" size={30} color="#007bff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Films;
