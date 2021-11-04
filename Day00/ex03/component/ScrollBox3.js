import React from "react";
import { StyleSheet, Text, View , Image, TextInput, ScrollView } from "react-native";

export default function ScrollBox({ imgLink,textElmt }) {
  return (
    <View style={styles.miniBox}>
        <Image
        source={{imgLink}}
        style = {{
            height:"85%", 
            width:"100%" ,
            marginBottom:"5%",
            backgroundColor:"grey",
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
        }}
        />
        <Text style={{height:"15%"}}>
            {textElmt}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  miniBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    height:300,
    width:330,
    margin:10,
    backgroundColor:"white",
  },

});