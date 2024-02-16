import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './screens/Inicio';
import Films from './screens/Films';
import Scenes from './screens/Scenes';
import Characters from './screens/Characters';
import FilmsSet from './screens/FilmsSet';
import CharactersSet from './screens/CharactersSet';
import FilmsDelete from './screens/FilmsDelete';
import FilmsUpdate from './screens/FilmsUpdate';
import ScenesDelete from './screens/ScenesDelete';
import ScenesUpdate from './screens/ScenesUpdate';
import ScenesSet from './screens/ScenesSet';
import CharactersDelete from './screens/CharactersDelete';
import CharactersUpdate from './screens/CharactersUpdate';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Home" component={Inicio} />
        <Stack.Screen name="Films" component={Films} />
        <Stack.Screen name="Scenes" component={Scenes} />
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="Add Film" component={FilmsSet} />
        <Stack.Screen name="CharactersSet" component={CharactersSet} />
        <Stack.Screen name="FilmsDelete" component={FilmsDelete} />
        <Stack.Screen name="FilmsUpdate" component={FilmsUpdate} />
        <Stack.Screen name="ScenesDelete" component={ScenesDelete} />
        <Stack.Screen name="ScenesSet" component={ScenesSet} />
        <Stack.Screen name="ScenesUpdate" component={ScenesUpdate} />
        <Stack.Screen name="CharactersDelete" component={CharactersDelete} />
        <Stack.Screen name="CharactersUpdate" component={CharactersUpdate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
