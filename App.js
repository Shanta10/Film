import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './screens/Inicio';
import Films from './screens/Films';
import Scenes from './screens/Scenes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Films" component={Films} />
        <Stack.Screen name="Scenes" component={Scenes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
