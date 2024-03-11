import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {GeneralButton} from '../components/buttons/GeneralButton';
import {getUserById} from '../api/users';

const Home = () => {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState<any>({});
  const [id, setId] = useState<string>('');
  const [idText, setIdText] = useState<string>('');

  useEffect(() => {
    const a = async () => {
      const result = await getUserById(id);
      console.log(result);
      if (result.status === 200) setUser(result.data);
    };
    if (id) a();
  }, [id]);

  return (
    <ImageBackground
      source={require('../assets/images/background1.jpg')}
      style={styles.imageBackground}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.viewContainer}>
          <View>
            <Text style={styles.textStyle}>Welcome to GPS testing</Text>
          </View>
          <View>
            <GeneralButton
              label="Press me 1 bitch!"
              onClick={() => setShow(!show)}
            />
            <GeneralButton
              label="Press me 2 bitch!"
              onClick={() => console.log('2')}
            />
            <GeneralButton
              label="Press me 3 bitch!"
              onClick={() => console.log('3')}
            />
          </View>
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
              style={styles.keyboardcontainer}>
              <TextInput
                value={idText}
                onChangeText={text => setIdText(text)}
                onEndEditing={() => {
                  setId(idText);
                }}
                style={styles.inputField}
              />
              {show && (
                <Text style={{color: 'white', fontSize: 32}}>{user.name}</Text>
              )}
            </KeyboardAvoidingView>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Home;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center', // Aligns children vertically
    alignItems: 'center', // Aligns children horizontally
  },
  safeAreaView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContainer: {
    flex: 1,
  },
  textStyle: {
    color: 'rgba(235,255, 255, 1)',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  buttonsContainer: {
    height: 400,
    alignItems: 'center',
  },

  keyboardcontainer: {
    justifyContent: 'flex-start', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
  },
  input: {
    width: '80%', // 80% of the container's width
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    padding: Platform.OS === 'android' ? 0 : 10,
  },
});
