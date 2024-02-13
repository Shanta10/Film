import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Cards from '../components/Cards';

const Scenes = ({ route }) => {
  const { scenes } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        {scenes.map(scene => (
          <Cards
            key={scene.id}
            title={scene.description}
            subtitle1={`Presupuesto: ${scene.budget}`}
            subtitle2={`Minutos: ${scene.minutes}`}
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

export default Scenes;
