import { React } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomNavigation } from './components';
import { CatalogScreen, ProductScreen } from './screens';


const Stack = createNativeStackNavigator();
  
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home" 
            >
                <Stack.Screen 
                    name="Home" 
                    component={BottomNavigation}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Catalog" 
                    component={CatalogScreen}
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
