import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList,Button, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const DrawerTest = ( props ) => {
  const [fontsLoaded, error] = Font.useFonts({
    PressStart2P: require("../../assets/fonts/PressStart2P-Regular.ttf"),
    DotGothic: require("../../assets/fonts/DotGothic16-Regular.ttf"),
  });
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();


  useEffect(async () => {

    const datas = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0%22");
    const pokemon = await datas.json();
    setData(pokemon.results)
    console.log(data)
    console.log(pokemon.results)

  }, [])

  console.log(props)

  return (
    <FlatList
      style={styles.flatListContainer}
      data={data}
      keyExtractor={({ url }, index) => url}
      renderItem={({ item }) => (
        <DrawerItem
          label={item.name}
          style={styles.text}
          onPress={() =>
            navigation.navigate("Detail", {
              item: item,
              url: item.url,
            })
          }
        /> 
      )}
    />
  )
}

export default function CustomDrawerContent(props) {

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerTest />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  // image: {
  //   width: "60%",
  //   height: "60%",
  // },
  flatListContainer: {
    width: "80%",
    height: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    marginVertical: 20,
    borderWidth: 5,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
  },
  listIcon: {
    backgroundColor: "#fc0022",
    borderRightWidth: 5,
    borderRightColor: "#fa979f",
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
  text: {
    fontSize: 22,
    paddingHorizontal: 8,
    textShadowColor: "rgba(0,0,0,.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textTransform: "capitalize",
    fontFamily: "DotGothic",
  },

  titleH1: {
    fontFamily: "PressStart2P",
    color: "white",
    fontSize: 15,
    textAlign: "center",
    textShadowColor: "#000000",
    textShadowOffset: { width: 3, height: 2 },
    textShadowRadius: 1,
    textTransform: "uppercase",
  },
  headerHome: {
    borderBottomWidth: 5,
  },
});
