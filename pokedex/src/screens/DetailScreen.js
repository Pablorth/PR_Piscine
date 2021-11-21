import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Icon from "react-native-vector-icons/FontAwesome";
import PokeType from "../components/Poketype";

export default function DetailScreen({ route, navigation }) {
  let [fontsLoaded, fontError] = Font.useFonts({
    PressStart2P: require("../../assets/fonts/PressStart2P-Regular.ttf"),
    DotGothic: require("../../assets/fonts/DotGothic16-Regular.ttf"),
  });
  const { url, item } = route.params;

  //const name = item.name;
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);

  async function fetchPokemonDetails() {
    const pokemonURL = url;
    fetch(pokemonURL)
      .then((res) => res.json())
      .then((details) => {
        setDetails(details);
        setIsLoading(false); 
      })
      .catch(err => {setIsLoading(false);
      setError(err);})
  }

  useEffect(async () => {
    setIsLoading(true);
    fetchPokemonDetails();
    // const datas = await fetch(pokemonURL);
    // const pokemon = await datas.json();
  }, [route.params]);
  if (isLoading) {
    return (<View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <ActivityIndicator size="large" color="#5500dc" />
    </View>);
  }
  if (error) {
    return (<View style={{flex:1, justifyContent: "center", alignItems:"center"}}>
    <Text style={{fontSize: 18}}> Error fetching data... check your network connection!</Text>
    </View>);
  }
  if (fontsLoaded) {
    return details.name ? (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/img/BG_repeat_lines.jpg")}
          style={{ width: "100%", height: "100%" }}
          imageStyle={{ resizeMode: "repeat" }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.headerDetail}>
              <ImageBackground
                source={require("../../assets/img/bg_name.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  paddingVertical: 7,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                resizeMode="stretch"
              >
                <Text style={styles.titleH1}>Pokemon Infos</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="bars"
                    type="font-awesome"
                    color="#ffffff"
                    size={27}
                  />
                  <Text
                    style={styles.linkBack}
                    onPress={() => navigation.toggleDrawer()}
                  >
                    Menu
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.contentDetail}>
              <ImageBackground
                source={require("../../assets/img/bg_pokeball.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  padding: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                resizeMode="cover"
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`,
                  }}
                />
              </ImageBackground>
              <View style={styles.pokeName}>
                <Image
                  source={require("../../assets/img/pokeball.png")}
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 10,
                    marginTop: 1,
                  }}
                  resizeMode={"contain"}
                />
                <Text
                  style={{
                    fontFamily: "DotGothic",
                    color: "white",
                    fontSize: 22,
                    letterSpacing: 1,
                    textTransform: "capitalize",
                    textShadowColor: "#000000",
                    textShadowOffset: { width: 3, height: 3 },
                    textShadowRadius: 1,
                  }}
                >
                  N.{details.id} {details.name}
                </Text>
              </View>
              <PokeType url={url} />
              <View style={styles.stats}>
                <Text style={styles.text}>Height {details.height}</Text>
                <View
                  style={{
                    borderBottomWidth: 4,
                    borderBottomColor: "grey",
                    borderStyle: "dashed",
                    marginTop: 5,
                  }}
                />
                <Text style={styles.text}>Weight {details.weight}</Text>
              </View>

              <View style={styles.stats}>
                <Text style={styles.text}>Ability:</Text>
                <View
                  style={{
                    borderBottomWidth: 4,
                    borderBottomColor: "grey",
                    borderStyle: "dashed",
                    marginTop: 5,
                  }}
                />
                <Text style={styles.text}>
                  {details.abilities[0].ability.name}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    ) : (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="#E63F34" />
      </View>
    );
  } else {
    return <AppLoading />;
  }
}
//     <SafeAreaView style={styles.container}>
//       <Text
//         onPress={() => navigation.toggleDrawer()}
//         style={styles.menuLink}>Menu
//       </Text>
//       <Text>
//         {name}
//       </Text>
//       <Text>
//         {url}
//       </Text>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  image: {
    width: "60%",
    height: "60%",
  },
  text: {
    fontSize: 22,
    paddingHorizontal: 8,
    textShadowColor: "rgba(0,0,0,.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontFamily: "DotGothic",
    textAlign: "center",
    //letterSpacing:1,
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titleH1: {
    fontFamily: "PressStart2P",
    color: "white",
    fontSize: 15,
    textShadowColor: "#000000",
    textShadowOffset: { width: 3, height: 2 },
    textShadowRadius: 1,
    textTransform: "uppercase",
  },
  linkBack: {
    fontFamily: "PressStart2P",
    textTransform: "uppercase",
    color: "white",
    fontSize: 15,
    marginLeft: 8,
  },
  headerDetail: {
    borderBottomWidth: 5,
  },
  contentDetail: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  pokeName: {
    backgroundColor: "#fc0022",
    width: "80%",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderWidth: 3,
    flexDirection: "row",
    shadowColor: "#000000",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  stats: {
    backgroundColor: "#ffffff",
    width: "80%",
    paddingVertical: 2,
    borderRadius: 5,
    borderWidth: 3,
    marginTop: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
});