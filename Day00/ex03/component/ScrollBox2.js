import React from "react";
import { StyleSheet, Text, View , Image, TextInput, ScrollView } from "react-native";

export default function ScrollBox({ imgLink,textElmt }) {
  return (
    <View style={styles.miniBox}>
        <Image
        source={{imgLink}}
        style = {{
            height:"75%", 
            width:"100%" ,
            marginBottom:"5%",
            backgroundColor:"grey",
            borderTopRightRadius:10,
            borderTopLeftRadius:10,
        }}
        />
        <Text style={{height:"25%"}}>
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
    height:200,
    width:200,
    margin:10,
    backgroundColor:"white",
  },

});