import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image ,Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 2, backgroundColor: '#D7D7D7' }}>
      <Image
        style={{height:"20%",marginBottom: "10%", marginTop: "30%"}}
        source ={require('./images/shoe.png')}
      />
      <View style={styles.container}>
        <View style={{marginBottom: "5%"}}>
          <Text style={{color:"grey"}}>Adidas</Text>
          <Text style={{marginTop: "2%",fontWeight: "bold"}} >Yeezy Boost 350 V2 Black Red</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent:"center" ,marginTop:"5%"}}>
          <View style={styles.button1}>
            <Text style={{fontSize: 15 }}>42</Text>
            
            <Text style={{textAlign:"right" ,fontSize: 15 }}>                    320€</Text>
          </View>
          <TouchableOpacity style={styles.button2}>
              <Text style={{ color: "white", fontSize: 20 }}>
              <Image
                style={{ height:"20%"}}
                source ={require('./images/buy.png')}
              />
                BUY
              </Text>
            </TouchableOpacity>
        </View >
        <View style={styles.text}>
          <Text >
            The <Text style={{fontWeight: "bold"}} >Yeezy 350 V2 Bred</Text> stands out for its sobriety
            and simplicity. Unlike most V2 shoes that feature a patterned print, this shoe has a monochrome black upper with <Text style={{fontWeight: "bold"}} >red stitching</Text>. Yeezy has a monochrome black upper with red stitching that reads SPLY-350.
            The silhouette is set on a black boost sole semi-translucent. 
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={{marginTop:"2%"}} >SKU: CP9652 Release </Text>
          <Text style={{marginTop:"2%"}}>Release date: February 2017</Text>
          <Text style={{marginTop:"2%"}}>Colorway: CORE BLACK/CORE BLACK/RED</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FFFFFF' ,
    justifyContent: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding :"7%"
  },
  text: {
    marginBottom: "5%",
    marginTop: "10%",
  },
  button1: {
    flex:1,
    flexDirection:"row",
    margin:"1%",
    padding :"2%",
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "grey",
  },
  button2: {
    flex:1,
    margin:"1%",
    padding :"2%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "black",
  },


});
