import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {getAllUsers} from '../api/users';
import {UserCard} from '../components/UserCard';
import {User} from '../types/user.type';

const Allusers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getAllUsers();
      if (result.status === 200) {
        setUsers(result.data);
      } else {
        console.error('Failed to fetch users', result.status);
      }
    };
    fetchUsers();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/bluegreen.jpg')}
      style={styles.imageBackground}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          {users.map((user, i) => (
            <UserCard key={i} user={user} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Allusers;
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    height: '100%',
  },
  card: {
    backgroundColor: 'rgba(235,255, 255, 1)',
    borderRadius: 20,
    borderWidth: 1,
    margin: 5,
  },
});
