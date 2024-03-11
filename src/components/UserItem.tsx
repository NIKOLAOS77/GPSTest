import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IProps {
    label: string;
    itemData: string;
}

export const UserItem = ({label, itemData}:IProps) => {
  return (
    <View style={styles.view}>
        <Text style={styles.text}>{label}</Text>
        <View style={styles.textItemBackground}>
            <Text style={styles.textItem}>{itemData}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    
      view: {
        flexDirection:'row',
      },
      text: {
        color: 'black',
        textAlign: 'center', 
        fontSize: 20,
        marginLeft: 10,
        marginTop:10
      },
      textItem:
      {
        color:'black',
        fontSize: 20,
        marginLeft:5,
       
      },
      textItemBackground:
      {
        flex: 1,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: 'gray',
        borderRadius: 10, 
      }
})