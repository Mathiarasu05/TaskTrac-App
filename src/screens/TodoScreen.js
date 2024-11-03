import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import CustomDrawer from './CustomDrawer';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AddtaskScreen from './AddtaskScreen';


const Drawer = createDrawerNavigator();

const TodoScreen = () => {
  return (
    <Drawer.Navigator
    screenOptions={{drawerLabelStyle:{ marginLeft:-15}}}
    drawerContent={props => <CustomDrawer {...props}/>} >
      <Drawer.Screen name="TaskTick" component={ProfileScreen}  options={{ headerTitle: null , headerTitleContainerStyle: { marginLeft: 90 },
        drawerIcon: () => ( <FontAwesome name="home" size={24} color={"black"}></FontAwesome>)
      }}/>
      <Drawer.Screen name='TaskTick.in' component={AddtaskScreen} options={{ headerTitle: null ,  headerTitleContainerStyle: { marginLeft: 20 },
        drawerIcon: () => ( <MaterialIcons name="add-task" size={24} color="black" />)
      }}/>
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ headerTitle: null , headerTitleContainerStyle: { marginLeft: 25 },
        drawerIcon: () => ( <Ionicons name="settings-outline" size={24} color="black" />)
      }} />
      
    </Drawer.Navigator>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  headerTitle:{
    color:"white"
  }
}) 