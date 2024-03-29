import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ScenesSet = ({ route }) => {
  const { filmId } = route.params;
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [minutes, setMinutes] = useState('');

  const handleAddScene = async () => {
    try {
      const sceneData = {
        description: description,
        budget: Number(budget),
        minutes: Number(minutes),
        filmId: filmId,
      };

      const response = await fetch('http://10.0.1.159:8080/scene', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sceneData),
      });

      if (response.ok) {
        alert('Nueva escena agregada con éxito!');
        setDescription('');
        setBudget('');
        setMinutes('');
      } else {
        alert('Error al agregar la escena:', response.statusText);
      }
    } catch (error) {
      console.error('Error al agregar la escena:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Escena</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={text => setDescription(text)}
        placeholder="Descripción"
      />
      <TextInput
        style={styles.input}
        value={budget}
        onChangeText={text => setBudget(text)}
        placeholder="Presupuesto"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={minutes}
        onChangeText={text => setMinutes(text)}
        placeholder="Minutos"
        keyboardType="numeric"
      />
      <Button title="Agregar Escena" onPress={handleAddScene} />
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

export default ScenesSet;
