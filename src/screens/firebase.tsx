import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const FirebaseScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bluegreen.jpg')}
      style={styles.imageBackground}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.title}>Firebase test</Text>
          {/* Add your settings options here */}
          <Button
            title="Press me"
            onPress={() => console.log('Button pressed')}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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

export default FirebaseScreen;
