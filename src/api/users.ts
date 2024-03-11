import {AxiosResponse} from 'axios';
import {client} from './client';
import {User} from '../types/user.type';

const endpoint = '/users';

export const getUserById = (id: string) => client.get('' + endpoint + '/' + id);

export const getAllUsers = (): Promise<AxiosResponse<User[], any>> =>
  client.get(endpoint);
