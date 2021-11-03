import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
          <Image
          style={{height:100, width:150 ,resizeMode:"center" , marginBottom:"10%", alignSelf:"center"}}
          source ={require('./assets/it-akademy.png')}
          /> 
        <View>
          <View style={styles.input}>
            <TextInput 
              style={{maxWidth:"40%"}}
              placeholder="Email"
            />
            <Image
            style={{height:"100%", width:"100%" ,resizeMode:"center" , marginBottom:"10%"}}
            source ={require('./assets/mail.png')}
            /> 
          </View>
          <View style={styles.input} >
            <TextInput  
            style={{maxWidth:"40%"}}
            placeholder="Password"
            />
            <Image
            style={{height:"100%", width:"100%" ,resizeMode:"center" , marginBottom:"10%"}}
            source ={require('./assets/lock.png')}
            /> 
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontSize: 20 }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginTop:"65%",
    flex:1,
    backgroundColor: '#fff',
    width:"80%",
    backgroundColor: "white",
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  input: {
    flex:1,
    flexDirection:"row",
    margin:"5%",
    padding :"5%",
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "grey",
  },
  button: {
    flex:1,
    margin:"5%",
    padding :"5%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "orange",
    borderColor: "orange",
    borderWidth: 2,
  },
  
});
