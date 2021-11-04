import React from "react";
import { 
    StyleSheet, 
    Text, 
    View , 
    Image, 
    TextInput, 
    ScrollView 
} from "react-native";

export default function ScrollBox({name}) {
    return (
        <View style={styles.profil}>
            <Image
            //source={require('../assets/perceval.jpeg')}
            style = {{
                height:80, 
                width:80 ,
                borderRadius:200,
                backgroundColor:"grey", 
            }}
            />
            <View style={styles.text}>
                <Text style={{marginBottom:"5%"}}>Welcome Back </Text>
                <Text>
                    {name}
                </Text>  
            </View>
            
        </View>
  );
}

const styles = StyleSheet.create({
    profil: {
        flexDirection:"row",
        padding:"5%",
    },
    text: {
        marginLeft:"5%",
        justifyContent:"center",
        flex:1,
    },
  });