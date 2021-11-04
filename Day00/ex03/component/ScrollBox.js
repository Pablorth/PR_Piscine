import React from "react";
import { StyleSheet, Text, View , Image, TextInput, ScrollView } from "react-native";

export default function ScrollBox({ imgLink,textElmt }) {
  return (
    <View style={styles.miniBox}>
        <Image
        source={{imgLink}}
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
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding:"2%",
    height:40,
    width:120,
    margin:"3%",
    backgroundColor:"white",
  },

});