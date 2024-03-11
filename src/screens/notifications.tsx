import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const NotificationsScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bluegreen.jpg')}
      style={styles.imageBackground}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.text}>Notifications Screen</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    //flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  safeAreaView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center', // Aligns children vertically
    alignItems: 'center', // Aligns children horizontally
  },
});

export default NotificationsScreen;
