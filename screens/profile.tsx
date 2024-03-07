import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,ImageBackground,SafeAreaView, TextInput,TouchableOpacity } from 'react-native';
import { getUserById } from '../api/users';
import { UserItem } from '../components/UserItem';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ExtraScreenNavigationProp } from '../api/navigationType';


const ProfileScreen = () => {
  const navigation = useNavigation<ExtraScreenNavigationProp>();
  const [user, setUser] = useState<any>({});
  const [id, setId] = useState<string>("");
  const [idText, setIdText] = useState<string>("");

  useEffect(() => {
    const a = async () => {
     const result = await getUserById(id);
     console.log(result);
     if(result.status===200)
        setUser(result.data);
    }
    if(id) a();
   
   }, [id]);
  return (
    <ImageBackground  source={require('../images/bluegreen.jpg')} style={styles.imageBackground}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.text}>Set User:</Text>
          <TextInput value={idText} onChangeText={(text)=> setIdText(text)} onEndEditing={()=>{setId(idText)}} style={styles.textInput}/>
          <TouchableOpacity  style={{borderRadius:15, backgroundColor:'tomato',marginLeft:5,marginRight:3,alignSelf:'center'}} 
                              onPress={() => navigation.navigate('Allusers')}>
            <Text style={styles.buttonAllUsers}>All Users</Text>
          </TouchableOpacity>
          
        </View>
        <View>
          <UserItem label="Name:" itemData={user.name}></UserItem>
          <UserItem label="UserName:" itemData={user.username}></UserItem>
          <Text style={{fontSize: 25, alignSelf:'center', marginTop:5}}> Address </Text>
          <UserItem label="Street:" itemData={user.address?.street}></UserItem>
          <UserItem label="suite:" itemData={user.address?.suite}></UserItem>
          <UserItem label="city:" itemData={user.address?.city}></UserItem>
          <Text style={{fontSize: 25, alignSelf:'center', marginTop:5}}> Contact </Text>
          <UserItem label="eMail:" itemData={user.email}></UserItem>
          <UserItem label="Phone:" itemData={user.phone}></UserItem>
          <UserItem label="Website:" itemData={user.website}></UserItem>
          <Text style={{fontSize: 25, alignSelf:'center', marginTop:5}}> Company </Text>
          <UserItem label="Name:" itemData={user.company?.name}></UserItem>
          <UserItem label="Catch Phrase:" itemData={user.company?.catchPhrase}></UserItem>
          <UserItem label="BS:" itemData={user.company?.bs}></UserItem>
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
    flexDirection:"row",
    paddingTop: 20,
    paddingLeft: 5,
  },
  buttonAllUsers:{
    color:'white',
    marginLeft:5,
    marginRight:5,
    width: 85,
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    paddingRight: 5,
  },
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
  textInput: {
    backgroundColor: "white",
    height:30,width:200,
    borderRadius:10
  },
    
});

export default ProfileScreen;