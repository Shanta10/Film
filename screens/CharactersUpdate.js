import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CharactersUpdate = ({ route }) => {
  const { characterId } = route.params;
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`http://10.0.1.159:8080/characters/${characterId}`);
        const data = await response.json();
        setDescription(data.description);
        setCost(data.cost.toString());
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [characterId]);

  const handleUpdateCharacter = async () => {
    try {
      const updatedCharacterData = {
        description: description,
        cost: Number(cost),
      };

      const response = await fetch(`http://10.0.1.159:8080/characters/${characterId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCharacterData),
      });

      if (response.ok) {
        alert('Personaje actualizado con éxito!');
      } else {
        alert('Error al actualizar el personaje:', response.statusText);
      }
    } catch (error) {
      console.error('Error al actualizar el personaje:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actualizar Personaje</Text>
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
      <Button title="Actualizar Personaje" onPress={handleUpdateCharacter} />
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

export default CharactersUpdate;
