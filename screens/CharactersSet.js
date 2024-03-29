import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CharactersSet = ({ route }) => {
  const { sceneId } = route.params;
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');

  const handleAddCharacter = async () => {
    try {
      const characterData = {
        description: description,
        cost: Number(cost),
        sceneId: sceneId,
      };

      const response = await fetch('http://10.0.1.159:8080/characters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterData),
      });

      if (response.ok) {
        alert('Nuevo personaje agregado con éxito!');
        setDescription('');
        setCost('');
      } else {
        alert('Error al agregar el personaje:', response.statusText);
      }
    } catch (error) {
      console.error('Error al agregar el personaje:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Personaje</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={text => setDescription(text)}
        placeholder="Descripción"
      />
      <TextInput
        style={styles.input}
        value={cost}
        onChangeText={text => setCost(text)}
        placeholder="Costo"
        keyboardType="numeric"
      />
      <Button title="Agregar Personaje" onPress={handleAddCharacter} />
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

export default CharactersSet;
