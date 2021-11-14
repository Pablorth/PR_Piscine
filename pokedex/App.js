import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import ModelSScreen from './src/screens/ModelSScreen';
import Model3Screen from './src/screens/Model3Screen';
import ModelXScreen from './src/screens/ModelXScreen';
import ModelYScreen from './src/screens/ModelYScreen';
import PokemonScreen from './src/screens/PokemonScreen';
import DetailScreen from './src/screens/DetailScreen';
import CustomDrawerContent from './src/components/CustomDrawerContant';
import FakeBdd from './src/components/FakeBdd';


const Drawer = createDrawerNavigator();
const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";



export default function App() {

  const [data, setData] = useState([]);
  useEffect(async () => {

    const datas = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0%22");
    const pokemon = await datas.json();
    setData(pokemon.results)
    console.log(data)
    //console.log(pokemon.results)

  }, [])
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(data) => <CustomDrawerContent {...data} />}
        screenOptions={{ headerShown: false }}
        initialRouteName="Pokemons">
        <Drawer.Screen name="Pokemons" component={PokemonScreen} />
        <Drawer.Screen name="Detail" component={DetailScreen} initialParams={{ url: "https://pokeapi.co/api/v2/pokemon/1" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};