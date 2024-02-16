import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Cards from '../components/Cards';
import Icon from 'react-native-vector-icons/FontAwesome';

const Characters = ({ route, navigation }) => {
  const { charactersUrl, sceneId } = route.params;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(charactersUrl);
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [charactersUrl]);

  const navigateToCharactersSet = () => {
    navigation.navigate('CharactersSet', { sceneId: sceneId });
  };

  const navigateToCharactersUpdate = (characterId) => {
    navigation.navigate('CharactersUpdate', { characterId: characterId });
  };

  const navigateToCharactersDelete = (characterId) => {
    navigation.navigate('CharactersDelete', { characterId: characterId });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {characters.map(character => (
          <TouchableOpacity
            key={character.id}
            onPress={() => navigateToCharactersUpdate(character.id)}
          >
            <Cards
              title={character.description}
              subtitle1={`Costo: ${character.cost}`}
              onEditPress={() => navigateToCharactersUpdate(character.id)}
              onDeletePress={() => navigateToCharactersDelete(character.id)}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={navigateToCharactersSet}
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

export default Characters;
