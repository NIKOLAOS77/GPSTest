import { client } from "./client";

const endpoint = "/users";

    export const getUserById=(id:string)=>client.get(""+endpoint+"/"+id);

    export const getAllUsers = () => client.get(endpoint);