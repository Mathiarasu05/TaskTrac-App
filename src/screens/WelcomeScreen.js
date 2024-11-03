import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';

const WelcomeScreen = ({ navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"white"}}>
            <View style={{ marginLeft: 30 }}>
                <Image style={styles.tick} source={require("../../images/task1.jpg")}></Image><Text style={styles.head1}>TaskTick.in</Text>
                <Image style={styles.maini} source={require("../../images/task.jpg")}></Image>
            </View>
            <View style={{ marginTop:25}}>
                <Text style={styles.unlock}>Unlock your Productivity</Text>
                <Text style={styles.nxt}>With TaskTick</Text>
            </View>
            <View style={{
                width: "auto",
                height: "70%",
                backgroundColor: "#00bfff",
                marginTop: 15,
                borderTopLeftRadius:55,
                borderTopRightRadius: 55,
            }}>
             <View>
               <Pressable
               onPress={() => navigation.navigate("Todo")}
               >
                 <Text style={styles.gets}>Get Started <FontAwesome name={"arrow-right"} size={20} color="white"></FontAwesome></Text>
                 <Text style={{ textAlign:"center",marginTop:60,fontSize:17,color:"white"}}>Terms & Condition</Text>
               </Pressable>
               </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    tick: {
        marginTop: 30,
        marginLeft: 45,
        borderRadius: 50,
        width: 40,
        height: 40
    },
    head1: {
        fontSize: 28,
        fontWeight: "600",
        textAlign: "center",
        marginTop: -40,
    },
    unlock:{
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold",
        marginTop:10,
    },
    nxt:{
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold",
        color:"#00bfff",
    },
    gets:{
        textAlign:"center",
        fontSize:22,
        fontWeight:"600",
        borderWidth:2,
        width:"80%",
        borderColor:"white",
        borderRadius:30,
        padding:13,
        marginTop:90,
        marginLeft:35,
        color:"white"
    },
    maini:{
        width:250,
        height:250,
        borderRadius:20,
        marginTop:45,
        marginLeft:25,
    }
})