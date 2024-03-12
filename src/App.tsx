import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/home';
import NotificationsScreen from './screens/notifications';
import FirebaseScreen from './screens/firebase';
import ProfileScreen from './screens/profile';
import SettingsScreen from './screens/settings';
import Allusers from './screens/allusers';
import HomeIcon from './assets/svgs/home.svg';
import SettingsIcon from './assets/svgs/settings.svg';
import FirebaseIcon from './assets/svgs/firebase.svg';
import NotificationsIcon from './assets/svgs/notifications.svg';
import ProfileIcon from './assets/svgs/person.svg';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

//import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabScreens = [
  {name: 'Home', component: HomeScreen, icon: HomeIcon},
  {
    name: 'Notifications',
    component: NotificationsScreen,
    icon: NotificationsIcon,
  },
  {name: 'Firebase', component: FirebaseScreen, icon: FirebaseIcon},
  {name: 'Profile', component: ProfileScreen, icon: ProfileIcon},
  {name: 'Settings', component: SettingsScreen, icon: SettingsIcon},
];

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Allusers"
        component={Allusers}
        options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerTintColor: 'rgba(0,255, 255, 1)',
          headerTitle: '', // Hide the title
          // Optional: Adjust other header styles as needed
          headerBackTitleVisible: true,
        }}
      />
    </Stack.Navigator>
  );
}

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const CustomComponent = () => (
  <View
    style={{
      backgroundColor: 'white',
      borderRadius: 20,
      height: '65%',
      margin: 16,
    }}></View>
);
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          borderWidth: 0,
          borderRadius: 30,
          height: '8%',
          elevation: 2,
          backgroundColor: 'lightblue',
          shadowColor: 'black', // Shadow color
          shadowOffset: {width: 0, height: 10}, // Shadow direction and distance
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 5, // Shadow blur radius
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          bottom: 40,
          left: 25,
          right: 25,
          paddingVertical: Platform.OS === 'ios' ? 30 : 0,
        },
        //tabBarBackground: () => <CustomComponent />,
        tabBarActiveBackgroundColor: 'transparent',
      }}>
      {tabScreens.map(({name, component, icon: Icon}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <View
                style={{
                  width: size + 20,
                  height: size + 20,
                  borderRadius: (size + 10) / 2,
                  backgroundColor: focused ? 'tomato' : 'rgba(255,255,255,1)',
                  justifyContent: 'center', // Center the icon horizontally
                  alignItems: 'center', // Center the icon vertically
                }}>
                <Icon width={size} height={size} fill={color} />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default function App() {
  //useEffect(() => {
  // SplashScreen.hide();
  //}, []);
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
