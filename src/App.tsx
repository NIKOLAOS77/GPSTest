import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
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
          headerShown: true, // Show the header, but we'll customize it
          headerBackTitle: 'Back', // Set the back button text
          headerTintColor: 'rgba(0,255, 255, 1)',
          headerTitle: '', // Hide the title
          // Optional: Adjust other header styles as needed
          headerBackTitleVisible: true, // Ensure back button label is shown (might be unnecessary depending on your React Navigation version)
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

//const CustomComponent = ({fillColor = 'rgba(235,255, 255, 0.1)'}) => (
//  <Svg height="200" width="400" viewBox="0 24 295 100">
//    <Path d="M 34.395833 13.360941 A 26.326698 26.3267 0 0 0 10.194726 29.368749 L 4.2333333 29.368749 L 4.2333333 50.272383 L 10.310998 50.272383 A 26.326698 26.3267 0 0 0 34.395833 66.014057 A 26.326698 26.3267 0 0 0 58.480667 50.272383 L 81.748497 50.272383 A 26.3267 26.3267 0 0 0 105.83333 66.014057 A 26.3267 26.3267 0 0 0 129.91817 50.272383 L 155.83183 50.272383 A 26.3267 26.3267 0 0 0 179.91666 66.014057 A 26.3267 26.3267 0 0 0 204.0015 50.272383 L 227.26933 50.272383 A 26.3267 26.3267 0 0 0 251.35416 66.014057 A 26.3267 26.3267 0 0 0 275.439 50.272383 L 281.7828 50.272383 L 281.7828 29.368749 L 275.57232 29.368749 A 26.3267 26.3267 0 0 0 251.35416 13.360941 A 26.3267 26.3267 0 0 0 227.15306 29.368749 L 204.13482 29.368749 A 26.3267 26.3267 0 0 0 179.91666 13.360941 A 26.3267 26.3267 0 0 0 155.71556 29.368749 L 130.05149 29.368749 A 26.3267 26.3267 0 0 0 105.83333 13.360941 A 26.3267 26.3267 0 0 0 81.632225 29.368749 L 58.613992 29.368749 A 26.326698 26.3267 0 0 0 34.395833 13.360941 z "
//    fill={fillColor} />
//  </Svg>
//);
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
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          borderColor: 'transparent',
          height: 110,
          backgroundColor: 'transparent',
          borderEndColor: 'transparent',
          shadowColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
        },
        //tabBarBackground: () => <CustomComponent />,
        tabBarActiveBackgroundColor: 'transparent',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}: TabBarIconProps) => (
            <View
              style={{
                width: size + 20, // Slightly larger than the icon size for padding
                height: size + 20, // Same as width to ensure it's square (and thus can be made round)
                borderRadius: (size + 10) / 2, // Half of width/height to make it round
                backgroundColor: focused ? 'tomato' : 'rgba(255,255,255,1)', // Change the background color when focused
                justifyContent: 'center', // Center the icon horizontally
                alignItems: 'center', // Center the icon vertically
              }}>
              <HomeIcon width={size} height={size} fill={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({color, size, focused}: TabBarIconProps) => (
            <View
              style={{
                width: size + 20, // Slightly larger than the icon size for padding
                height: size + 20, // Same as width to ensure it's square (and thus can be made round)
                borderRadius: (size + 10) / 2, // Half of width/height to make it round
                backgroundColor: focused ? 'tomato' : 'rgba(255,255,255,1)', // Change the background color when focused
                justifyContent: 'center', // Center the icon horizontally
                alignItems: 'center', // Center the icon vertically
              }}>
              <NotificationsIcon width={size} height={size} fill={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Firebase"
        component={FirebaseScreen}
        options={{
          tabBarIcon: ({color, size, focused}: TabBarIconProps) => (
            <View
              style={{
                width: size + 20, // Slightly larger than the icon size for padding
                height: size + 20, // Same as width to ensure it's square (and thus can be made round)
                borderRadius: (size + 10) / 2, // Half of width/height to make it round
                backgroundColor: focused ? 'tomato' : 'rgba(255,255,255,1)', // Change the background color when focused
                justifyContent: 'center', // Center the icon horizontally
                alignItems: 'center', // Center the icon vertically
              }}>
              <FirebaseIcon width={size} height={size} fill={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size, focused}: TabBarIconProps) => (
            <View
              style={{
                width: size + 20, // Slightly larger than the icon size for padding
                height: size + 20, // Same as width to ensure it's square (and thus can be made round)
                borderRadius: (size + 10) / 2, // Half of width/height to make it round
                backgroundColor: focused ? 'tomato' : 'rgba(255,255,255,1)', // Change the background color when focused
                justifyContent: 'center', // Center the icon horizontally
                alignItems: 'center', // Center the icon vertically
              }}>
              <ProfileIcon width={size} height={size} fill={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size, focused}: TabBarIconProps) => (
            <View
              style={{
                width: size + 20, // Slightly larger than the icon size for padding
                height: size + 20, // Same as width to ensure it's square (and thus can be made round)
                borderRadius: (size + 10) / 2, // Half of width/height to make it round
                backgroundColor: focused ? 'tomato' : 'rgba(255,255,255,1)', // Change the background color when focused
                justifyContent: 'center', // Center the icon horizontally
                alignItems: 'center', // Center the icon vertically
              }}>
              <SettingsIcon width={size} height={size} fill={color} />
            </View>
          ),
        }}
      />
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
