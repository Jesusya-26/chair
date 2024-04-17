import { React, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProductScreen } from './screens';


const Stack = createNativeStackNavigator();
  
function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
            />
            <Stack.Screen 
                name="Product" 
                component={ProductScreen}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
}
  
export default App;