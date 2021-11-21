import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
//import styled from "styled-components";

export default function PokeType(props) {
  let [fontsLoaded, error] = Font.useFonts({
    PressStart2P: require("../../assets/fonts/PressStart2P-Regular.ttf"),
    DotGothic: require("../../assets/fonts/DotGothic16-Regular.ttf"),
  });
  const pokemonURL = props.url;
  const [pokemons, setPokemons] = useState([]);
  

  useEffect(async () => {
    const datas = await fetch(pokemonURL);
    const pokemons = await datas.json();
    setPokemons(pokemons.types);
    // console.log(pokemons.types)
  }, [props.url]);
  if (fontsLoaded) {
    return (
      <View style={styles.typeContainer}>
        {pokemons.map((type, i) => {
          return (
            <Text key={i} style={styles.pTypes}>
              {type.type.name}
            </Text>
          );
        })}
      </View>
    );
  } else {
    return <AppLoading />;
  }
}
const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: "row",
    
  },
  pTypes: {
    fontFamily: "PressStart2P",
    color: "white",
    fontSize: 15,
    marginHorizontal:5,
    marginTop:20,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 3, height: 2 },
    textShadowRadius: 1,
    
    textTransform: "uppercase",
    backgroundColor: "rgba(106, 105, 105, 0.6)",
    //width: "80%",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 3,
    
  },
  fly: {},
});