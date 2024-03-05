import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface IProps {
    label: string;
    onClick: ()=> void;
}

export const GeneralButton = ({label, onClick}:IProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
    <Text style={styles.touchableOpacity}>{label}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent blue
        borderRadius: 10, // Curved corners
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom:8,
       // alignSelf: 'flex-end',
        width: 200
      },
      touchableOpacity: {
        color: 'white',
        textAlign: 'center', // Center text horizontally
      }
})