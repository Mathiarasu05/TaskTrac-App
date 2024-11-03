import { ImageBackground, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons';
const CustomDrawer = ( props ) => {
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{
        backgroundColor:"#00bfff",width:"100%",height:"80%"}}>
        <View style={{ flexDirection:"row",marginTop:50}}>
        <Image source={require("../../images/task1.jpg")} style={{ width:40,height:40, borderRadius:50,marginLeft:10}}/>
        <Text style={{ color:"white",fontSize:20,marginTop:5,marginLeft:10}}>TaskTick.in</Text>
        </View>
        <View style={{flex:1,backgroundColor:"white",paddingTop:10,marginTop:50}}>
        <DrawerItemList {...props}/>
        </View>
        
    </DrawerContentScrollView>
    <View style={{flexDirection:"row",marginLeft:20,marginBottom:20,borderWidth:1,borderColor:"#00bfff",padding:10,width:"45%",borderRadius:20}}>
        <Text style={{marginRight:10,fontSize:18}}>Logout</Text><AntDesign name="logout" size={24} color="black" />
    </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})