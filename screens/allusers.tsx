import React from 'react'
import { View, Text, StyleSheet, ScrollView,ImageBackground, SafeAreaView} from 'react-native';

const Allusers = () => {
  return (
    <ImageBackground  source={require('../images/bluegreen.jpg')} style={styles.imageBackground}>
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.card}>
                
                </View>

            </ScrollView>
        </SafeAreaView>
    </ImageBackground>
);
 
}
export default Allusers;
const styles = StyleSheet.create({
    safeAreaView:{
        flex:1,
        height:"100%",
        width:"100%",
      },
    imageBackground: {
        flex: 1,
        justifyContent: 'center', // Aligns children vertically
        alignItems: 'center', // Aligns children horizontally
      },
      scrollView:{
        height:'100%',
      },
      card: {
        //height:'200%',
        backgroundColor:'rgba(235,255, 255, 1)',
        borderRadius: 20,
        borderWidth:1,
        margin:5
      }
      
  });