import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ScenesDelete = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { sceneId } = route.params;

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://10.0.1.159:8080/scene/${sceneId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('La escena se ha eliminado correctamente.');
        navigation.goBack();
      } else {
        alert('Error al eliminar la escena:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar la escena:', error);
    }
  };

  const handleNo = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Seguro deseas eliminar la escena?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleDelete}>
          <Text style={styles.buttonText}>SÍ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={handleNo}>
          <Text style={styles.buttonText}>NO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ScenesDelete;
