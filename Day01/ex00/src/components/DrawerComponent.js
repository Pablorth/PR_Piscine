import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModelSScreen from '../../src/screens/ModelSScreen';
import Model3Screen from '../../src/screens/Model3Screen';
import ModelXScreen from '../../src/screens/ModelXScreen';
import ModelYScreen from '../../src/screens/ModelYScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ModelS">
        <Drawer.Screen name="ModelS" component={ModelSScreen} />
        <Drawer.Screen name="Model3" component={Model3Screen} />
        <Drawer.Screen name="ModelY" component={ModelYScreen} />
        <Drawer.Screen name="ModelX" component={ModelXScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

