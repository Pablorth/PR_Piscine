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
        <ScrollView horizontal="true" style={{ flexDirection: "row" }}>
          <ScrollBox
            //imgLink={require("./assets/img/javascript.png")}
            textElmt="Javascript"
          />
          <ScrollBox
            //imgLink={require("./assets/img/react.png")}
            textElmt="React"
          />
          <ScrollBox
            //imgLink={require("./assets/img/react.png")}
            textElmt="Node.js"
          />
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView style={{marginBottom:"10%"}}>
        <Text style={{marginLeft:"5%"}}>
          CONTINUE LEARNING
        </Text>
        <ScrollView horizontal="true" style={{ flexDirection: "row" }}>
          <ScrollBox2
            //imgLink={require("./assets/img/javascript.png")}
            textElmt="Javascript"
          />
          <ScrollBox2
            //imgLink={require("./assets/img/react.png")}
            textElmt="React"
          />
          <ScrollBox2
            //imgLink={require("./assets/img/react.png")}
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
            //imgLink={require("./assets/img/javascript.png")}
            textElmt="Javascript"
          />
          <ScrollBox3
            //imgLink={require("./assets/img/react.png")}
            textElmt="React"
          />
          <ScrollBox3
            //imgLink={require("./assets/img/react.png")}
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
