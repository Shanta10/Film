import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ScenesUpdate = ({ route }) => {
  const { sceneId } = route.params;
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [minutes, setMinutes] = useState('');

  const handleUpdateScene = async () => {
    try {
      const updatedSceneData = {
        description: description,
        budget: Number(budget),
        minutes: Number(minutes),
      };

      const response = await fetch(`http://10.0.1.159:8080/scene/${sceneId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSceneData),
      });

      if (response.ok) {
        alert('Escena actualizada con éxito!');
      } else {
        alert('Error al actualizar la escena:', response.statusText);
      }
    } catch (error) {
      console.error('Error al actualizar la escena:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actualizar Escena</Text>
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
      <Button title="Actualizar Escena" onPress={handleUpdateScene} />
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

export default ScenesUpdate;
