
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
import ProfileIcon from './images/person.svg';

import 'react-native-gesture-handler';
import { useColorScheme } from 'react-native';
import Svg, { Path } from 'react-native-svg';
const Tab = createBottomTabNavigator();

// Define or import your type
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const CustomComponent = () => (
  <Svg height="200" width="400" viewBox="0 0 200 200">
    <Path  d="M 7.1151368,36.41276 C 25.530785,7.9522118 45.620582,23.01956 45.620582,23.01956 L 66.965993,7.9522118 c 0,0 17.160036,2.5112242 19.671263,8.3707492 2.511224,5.859524 4.185375,13.3932 9.626362,15.067348 5.440982,1.674151 28.460542,-6.696599 31.808842,-7.115136 3.3483,-0.418538 6.6966,-3.3483 15.48589,-7.533674 8.78929,-4.185375 17.57857,-5.440988 26.36786,-4.185375 8.78929,1.255612 23.85663,6.696599 26.36786,10.881974 2.51122,4.185375 7.95221,8.789287 7.95221,14.64881 0,5.859526 2.92976,10.463437 -0.41853,12.974664 -3.3483,2.511224 -6.27807,6.278059 -18.41565,3.766836 -12.13759,-2.511224 -23.85664,-7.952211 -28.87909,-2.929763 -5.02245,5.02245 4.60391,4.603914 -13.81173,6.696601 -18.41565,2.092685 -38.08692,-5.02245 -42.27229,-5.440989 -4.185372,-0.418537 -17.160034,-0.837073 -21.763948,0.837075 -4.603911,1.674151 -11.719049,5.02245 -19.252723,5.859526 -7.533674,0.837073 -10.044898,2.511224 -27.204934,1.674148 C 15.067349,60.687931 10.881974,60.269394 6.6965993,54.828408 2.5112248,49.387421 7.1151368,36.41276 7.1151368,36.41276 Z" fill="none" stroke="black" />
  </Svg>
);


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveBackgroundColor:'lightblue',
    tabBarStyle: {
      position: 'absolute', // Keep this to support custom backgrounds
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
      <MyTabs />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
 
});