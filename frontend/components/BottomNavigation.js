import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CatalogScreen, FavouritesScreen, TryOnScreen, UserProfileScreen } from '../screens';
import { CatalogIcon, HeartIcon, CubeFocusIcon, UserIcon } from './icons';

const Tab = createBottomTabNavigator();



const BottomNavigation = () => {
    const [fontsLoaded] = useFonts({
      'SF-Bold': require('../assets/fonts/SFProText-Bold.ttf'),
      'SF-Heavy': require('../assets/fonts/SFProText-Heavy.ttf'),
      'SF-Light': require('../assets/fonts/SFProText-Light.ttf'),
      'SF-Medium': require('../assets/fonts/SFProText-Medium.ttf'),
      'SF-Regular': require('../assets/fonts/SFProText-Regular.ttf'),
      'SF-Semibold': require('../assets/fonts/SFProText-Semibold.ttf'),
    });

    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    }

    return (
      <Tab.Navigator
        initialRouteName="Catalog"
        backBehavior="history"
        screenOptions={{
          tabBarActiveTintColor: "#0057FF",
          tabBarInactiveTintColor: "#9199A3",
          tabBarLabelStyle: {
            fontFamily: "SF-Semibold",
            fontSize: 10,
            fontWeight: 500,
          },
          headerShown: false,
        }}

      >
        <Tab.Screen
          name="Catalog"
          component={CatalogScreen}
          options={{
            tabBarLabel: "Каталог",
            tabBarIcon: ({ focused, color, size }) => {
              let isFocused;
              isFocused = focused ? true : false;
              return <CatalogIcon isActive={isFocused} color={color} size={size} />
            },
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            tabBarLabel: "Избранное",
            tabBarIcon: ({ focused, color, size }) => {
              let isFocused;
              isFocused = focused ? true : false;
              return <HeartIcon isActive={isFocused} color={color} size={size} />
            }
          }}
        />
        <Tab.Screen
          name="TryOn"
          component={TryOnScreen}
          options={{
            tabBarLabel: 'Примерка',
            tabBarIcon: ({ focused, color, size }) => {
              let isFocused;
              isFocused = focused ? true : false;
              return <CubeFocusIcon isActive={isFocused} color={color} size={size} />
            }
          }}
        />
        <Tab.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{
            tabBarLabel: 'Профиль',
            tabBarIcon: ({ focused, color, size }) => {
              let isFocused;
              isFocused = focused ? true : false;
              return <UserIcon isActive={isFocused} color={color} size={size} />
            }
          }}
        />
      </Tab.Navigator>
    );
};

export default BottomNavigation;