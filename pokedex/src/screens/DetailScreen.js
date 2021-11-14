import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList
} from "react-native";


export default function DetailScreen( {item,navigation}) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(async ()=> {

    const datas = await fetch(item.url);
    const pokemon = await datas.json();
    setData(pokemon.results);

    }, [])
  return (
    <View style={styles.container}>
      <FlatList
          data={data}
          keyExtractor={({ url }, index) => url}
          renderItem={({ item }) => (
            <Text
            onPress={() => 
                navigation.navigate('Detail', {url: item.url} )}   
            >
                //{item.name} + {item.url}
            </Text>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      color: "#3F3E3E",
      fontSize: 32,
      fontWeight: "bold",
      letterSpacing: 1,
    },
    header: {
      width: "100%",
      paddingHorizontal: 15,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    imgIcon: {
      width: 205,
      height: 125,
      resizeMode: "center",
      flex: 0.5,
    },
    menuLink: {
      backgroundColor: "rgba(196, 196, 196, 0.39)",
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 25,
    },
  });