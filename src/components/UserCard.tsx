import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserItem} from './UserItem';
import {User} from '../types/user.type';

interface IProps {
  user: User;
}

export const UserCard = ({user}: IProps) => {
  return (
    <View style={styles.card}>
      <UserItem label="Name:" itemData={user.name}></UserItem>
      <UserItem label="UserName:" itemData={user.username}></UserItem>
      <UserItem label="eMail:" itemData={user.email}></UserItem>
      <UserItem label="BS:" itemData={user.company?.bs}></UserItem>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    //height:'200%',
    backgroundColor: 'rgba(235,255, 255, 1)',
    borderRadius: 20,
    borderWidth: 1,
    margin: 5,
  },
});
