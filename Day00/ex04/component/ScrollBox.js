import React from "react";
import { StyleSheet, Text, View , Image, TextInput, ScrollView } from "react-native";

export default function ScrollBox({ imgLink,textElmt }) {
  return (
    <View style={styles.miniBox}>
        <Image
        source={imgLink}
        style = {{
          height:"120%", 
          width:"30%" ,
          backgroundColor:"white",
          
        }}
        />
        <Text>
            {textElmt}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex:1,
    marginTop: 10,
  },
  miniBox: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: "space-around",
    borderRadius: 5,
    padding:"2%",
    height:40,
    width:120,
    margin:"3%",
    backgroundColor:"white",
  },

});