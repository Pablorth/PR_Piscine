import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function PokemonScreen({ navigation }) {
  const [fontsLoaded, error] = Font.useFonts({
    PressStart2P: require("../../assets/fonts/PressStart2P-Regular.ttf"),
    DotGothic: require("../../assets/fonts/DotGothic16-Regular.ttf"),
  });
  const [data, setData] = useState([]);

  useEffect(async () => {
    const datas = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0%22"
    );
    const pokemon = await datas.json();
    setData(pokemon.results);
  }, []);
  if (fontsLoaded) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/img/BG_repeat_lines.jpg")}
          style={{ width: "100%", height: "100%" }}
          imageStyle={{ resizeMode: "repeat" }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.headerHome}>
              <ImageBackground
                source={require("../../assets/img/bg_name.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  paddingVertical: 7,
                  paddingHorizontal: 10,
                  alignItems: "center",
                }}
                resizeMode="stretch"
              >
                <Text style={styles.titleH1}>POKEDEX</Text>
              </ImageBackground>
            </View>

            <View style={styles.flatListContainer}>
              <FlatList
                data={data}
                keyExtractor={({ url }, index) => url}
                renderItem={({ item }) => (
                  <View style={styles.row}>
                    <View style={styles.listIcon}>
                      <Image
                        source={require("../../assets/img/pokeball.png")}
                        style={{
                          width: 40,
                          height: 40,
                          marginTop: 1,
                        }}
                        resizeMode={"contain"}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 5,
                        paddingTop: 4,
                      }}
                    >
                      <Text style={styles.text}>
                        {item.url.slice(34).replace("/", "") + " "}
                      </Text>
                      <Text
                        style={styles.text}
                        onPress={() =>
                          navigation.navigate("Detail", {
                            item: item,
                            url: item.url,
                          })
                        }
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  } else {
    return <AppLoading />;
  }
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