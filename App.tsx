
//import React from 'react';
import { enableScreens } from 'react-native-screens';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/home";
import NotificationsScreen from "./screens/notifications";
import ProfileScreen from "./screens/profile";
import SettingsScreen from "./screens/settings";
import DataScreen from "./screens/datas";

import HomeIcon from './images/home.svg'; 
import SettingsIcon from './images/settings.svg'; 
import NotificationsIcon from './images/notifications.svg'; 
import ProfileIcon from './images/profile.svg'; 

import 'react-native-gesture-handler';
import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveBackgroundColor:'lightblue' }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>    
      <MyTabs />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
 
});