import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import HomeScreen from "./screens/home";
import NotificationsScreen from "./screens/notifications";
import ProfileScreen from "./screens/profile";
import SettingsScreen from "./screens/settings";
import Allusers from "./screens/allusers";
import HomeIcon from './images/home.svg'; 
import SettingsIcon from './images/settings.svg'; 
import NotificationsIcon from './images/notifications.svg'; 
import ProfileIcon from './images/person.svg';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Allusers" component={Allusers}  options={{
          headerShown: true, // Show the header, but we'll customize it
          headerBackTitle: "Back", // Set the back button text
          headerTintColor:'rgba(0,255, 255, 1)',
          headerTitle: "", // Hide the title
          // Optional: Adjust other header styles as needed
          headerBackTitleVisible: true// Ensure back button label is shown (might be unnecessary depending on your React Navigation version)
        }} />
    </Stack.Navigator>
  );
}

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const CustomComponent = ({fillColor = 'rgba(235,255, 255, 0.1)'}) => (
  <Svg height="200" width="400" viewBox="0 24 295 100">
    <Path d="M 34.395833 13.360941 A 26.326698 26.3267 0 0 0 10.194726 29.368749 L 4.2333333 29.368749 L 4.2333333 50.272383 L 10.310998 50.272383 A 26.326698 26.3267 0 0 0 34.395833 66.014057 A 26.326698 26.3267 0 0 0 58.480667 50.272383 L 81.748497 50.272383 A 26.3267 26.3267 0 0 0 105.83333 66.014057 A 26.3267 26.3267 0 0 0 129.91817 50.272383 L 155.83183 50.272383 A 26.3267 26.3267 0 0 0 179.91666 66.014057 A 26.3267 26.3267 0 0 0 204.0015 50.272383 L 227.26933 50.272383 A 26.3267 26.3267 0 0 0 251.35416 66.014057 A 26.3267 26.3267 0 0 0 275.439 50.272383 L 281.7828 50.272383 L 281.7828 29.368749 L 275.57232 29.368749 A 26.3267 26.3267 0 0 0 251.35416 13.360941 A 26.3267 26.3267 0 0 0 227.15306 29.368749 L 204.13482 29.368749 A 26.3267 26.3267 0 0 0 179.91666 13.360941 A 26.3267 26.3267 0 0 0 155.71556 29.368749 L 130.05149 29.368749 A 26.3267 26.3267 0 0 0 105.83333 13.360941 A 26.3267 26.3267 0 0 0 81.632225 29.368749 L 58.613992 29.368749 A 26.326698 26.3267 0 0 0 34.395833 13.360941 z "
    fill={fillColor} />
  </Svg>
);

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,  tabBarShowLabel: false, tabBarActiveBackgroundColor:'lightblue',
    tabBarStyle: {
      position: 'absolute', 
      borderTopWidth: 0,
      height: 110, // Custom height for the tab bar
    },
    tabBarBackground: () => (
      <CustomComponent />
    ),
    }}>
     
       <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <HomeIcon width={size} height={size} fill={color} />
          ),
        }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ color, size }: TabBarIconProps) => (
              <NotificationsIcon width={size} height={size} fill={color} />
          ),
        }}
      />
        <Tab.Screen
           name="Profile"
           component={ProfileScreen}
           options={{
             tabBarIcon: ({ color, size }: TabBarIconProps) => (
               <ProfileIcon width={size} height={size} fill={color} />
          ),
        }}
      />
        <Tab.Screen
           name="Settings"
           component={SettingsScreen}
           options={{
             tabBarIcon: ({ color, size }: TabBarIconProps) => (
               <SettingsIcon width={size} height={size} fill={color} />
             ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
 
});