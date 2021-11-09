import React, { useEffect, useState } from 'react';
import { View, Text,ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import DetailScreen from '../screens/DetailScreen';

const DrawerTest = ({navigation}) => {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
    
      useEffect(async ()=> {
    
        const datas = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0%22");
        const pokemon = await datas.json();
        setData(pokemon.results)
        console.log(data)
        console.log(pokemon.results)
    
        }, [])
        return (
          <FlatList
          data={data}
          keyExtractor={({ url }, index) => url}
          renderItem={({ item }) => (
            <DrawerItem label={item.name} 
              onPress={() => DetailScreen(item)}
              initialParams={{ url: "https://pokeapi.co/api/v2/pokemon/1" }}/>
          )}
        />
        )
      }

export default function CustomDrawerContent( props) {

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerTest/>
    </DrawerContentScrollView>
  );
}

