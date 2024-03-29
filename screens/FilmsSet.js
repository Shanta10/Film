import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FilmsSet = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddFilm = async () => {
    try {
      const filmData = {
        title: title,
        director: director,
        duration: Number(duration),
      };

      const response = await fetch('http://localhost:8080/film', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filmData),
      });

      if (response.ok) {
        alert('Nuevo Film agregado con éxito!');
        navigation.goBack();
      } else {
        alert('Error al agregar el Film:', response.statusText);
      }
    } catch (error) {
      console.error('Error al agregar el film:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Film</Text>
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
      <Button title="Agregar Film" onPress={handleAddFilm} />
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

export default FilmsSet;
