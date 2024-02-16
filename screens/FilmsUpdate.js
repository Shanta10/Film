import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const FilmsUpdate = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [duration, setDuration] = useState('');
  const route = useRoute();
  const { filmId } = route.params;

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await fetch(`http://10.0.1.159:8080/film/${filmId}`);
        const filmData = await response.json();
        setTitle(filmData.title);
        setDirector(filmData.director);
        setDuration(filmData.duration.toString());
      } catch (error) {
        console.error('Error fetching film data:', error);
      }
    };

    fetchFilmData();
  }, [filmId]);

  const handleUpdateFilm = async () => {
    try {
      const updatedFilmData = {
        title: title,
        director: director,
        duration: Number(duration),
      };

      const response = await fetch(`http://10.0.1.159:8080/film`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFilmData),
      });

      if (response.ok) {
        alert('Film actualizado con éxito!');
      } else {
        alert('Error al actualizar el Film:', response.statusText);
      }
    } catch (error) {
      console.error('Error al actualizar el film:', error);
    }
    finally {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actualizar Film</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Título"
      />
      <TextInput
        style={styles.input}
        value={director}
        onChangeText={text => setDirector(text)}
        placeholder="Director"
      />
      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={text => setDuration(text)}
        placeholder="Duración (minutos)"
        keyboardType="numeric"
      />
      <Button title="Actualizar Film" onPress={handleUpdateFilm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default FilmsUpdate;
