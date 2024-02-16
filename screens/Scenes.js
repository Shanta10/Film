import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Cards from '../components/Cards';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Scenes = ({ route }) => {
  const { scenes, filmId } = route.params;
  const navigation = useNavigation();

  const navigateToCharacters = (sceneId) => {
    const charactersUrl = `http://10.0.1.159:8080/characters?sceneId=${sceneId}`;
    navigation.navigate('Characters', { charactersUrl: charactersUrl });
  };

  const navigateToAddScene = () => {
    navigation.navigate('ScenesSet', { filmId: filmId });
  };

  const navigateToUpdateScene = (sceneId) => {
    navigation.navigate('ScenesUpdate', { sceneId: sceneId });
  };

  const navigateToDeleteScene = (sceneId) => {
    navigation.navigate('ScenesDelete', { sceneId: sceneId });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {scenes.map(scene => (
          <TouchableOpacity
            key={scene.id}
            onPress={() => navigateToCharacters(scene.id)}
          >
            <Cards
              title={scene.description}
              subtitle1={`Presupuesto: ${scene.budget}`}
              subtitle2={`Minutos: ${scene.minutes}`}
              onEditPress={() => navigateToUpdateScene(scene.id)}
              onDeletePress={() => navigateToDeleteScene(scene.id)}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={navigateToAddScene}
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

export default Scenes;
