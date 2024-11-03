import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import TodoScreen from '../screens/TodoScreen';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name='Todo' component={TodoScreen}></Stack.Screen>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator