import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import{createStackNavigator} from '@react-navigation/stack';

// Screens

import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen.js';

//Screen names


const detailsName = "Shop";
const settingsName = "Sherbime";
const homeName = "Oferta";

const Tab = createBottomTabNavigator();
function MainContainer() {
   
  return (
    <NavigationContainer>
        
      <Tab.Navigator
      
     
        initialRouteName={detailsName}
        screenOptions={({ route }) => ({
          header: () => null,
          tabBarActiveTintColor:'pink',
          tabBarIcon: ({ focused, color, size }) => {
            
            let iconName;
            let rn = route.name;
            

            if (rn === detailsName) {
              iconName = focused ? 'basket' : 'basket-outline';

            } else if (rn === homeName) {
              iconName = focused ? 'megaphone' : 'megaphone-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'build' : 'build-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
       
        >
        <Tab.Screen name={detailsName} component={DetailsScreen} />      
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={homeName} component={HomeScreen} />

      </Tab.Navigator>
      
    </NavigationContainer>
  );
}



export default MainContainer;