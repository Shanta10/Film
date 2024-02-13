import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Cards from '../components/Cards';

const Characters = ({ route }) => {
  const { characters } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        {characters.map(character => (
          <Cards
            key={character.id}
            title={character.description}
            subtitle1={`Costo: ${character.cost}`}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Characters;
