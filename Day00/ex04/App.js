import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView ,
  StyleSheet, 
  Text, 
  View , 
  ScrollView,
} from 'react-native';
import ScrollBox from "./component/ScrollBox";
import ScrollBox2 from "./component/ScrollBox2";
import ScrollBox3 from "./component/ScrollBox3";
import Profil from "./component/Profil";

export default function App() {
  return (
    <View style={styles.container}>
      <Profil name={"Roger"} />
      <SafeAreaView style={{marginBottom:"10%"}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal="true" style={{ flexDirection: "row" }}>
          <ScrollBox
            imgLink={require("./assets/javascript.png")}
            textElmt="Javascript"
          />
          <ScrollBox
            imgLink={require("./assets/react.jpg")}
            textElmt="React"
          />
          <ScrollBox
            imgLink={require("./assets/redux.png")}
            textElmt="Redux"
          />
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView style={{marginBottom:"10%"}}>
        <Text style={{marginLeft:"5%"}}>
          CONTINUE LEARNING
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal="true" style={{ flexDirection: "row" }}>
          <ScrollBox2
            imgLink={require("./assets/kaamelottbon.jpeg")}
            textElmt="Javascript"
          />
          <ScrollBox2
            imgLink=
            {require("./assets/react.jpg")}
            textElmt="React"
          />
          <ScrollBox2
            imgLink={require("./assets/redux.png")}
            textElmt="Node.js"
          />
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView>
        <Text style={{marginBottom:"1%",marginLeft:"5%"}}>
          NEXT PISCINE
        </Text>
        <ScrollView style={styles.lastScroll}>
          <ScrollBox3
            imgLink={require("./assets/javascript.png")}
            textElmt="Javascript"
          />
          <ScrollBox3
            imgLink={require("./assets/kaamelottbon.jpeg")}
            textElmt="React"
          />
          <ScrollBox3
            imgLink={require("./assets/abstract_bg.jpeg")}
            textElmt="Node.js"
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#E5E5E5"
  },
  lastScroll: {
    flex: 1,
    alignSelf:"center",
    //width:"80%",
    backgroundColor:"#E5E5E5"
  },
  
});
