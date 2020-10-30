import * as axios from 'axios';

const server = "https://localhost:44338/api/Account/";


const login = async function(currentUser){
  try{
    const response = await axios.post(`${server}login/`, currentUser, {headers: {"Content-Type": "application/json"}});
    const userToReturn = response.data;
    return userToReturn;
  } catch (error) {
    console.error(error);
    return null;
}};

const register = async function(currentUser){
    try{
      await axios.post(`${server}register/`, currentUser, {headers: {"Content-Type": "application/json"}});
    } catch (error) {
      console.error(error);
      return null;
  }};

  const refreshToken = async function(currentRefreshToken,currentAccesToken){
    try{
        console.log("refreshToken from data"+ currentRefreshToken);
        const refreashTokenJason = {
            "refreshToken": currentRefreshToken,
        }
        const response = await axios.post(`${server}refresh-token/`, refreashTokenJason, {headers: {"Content-Type": "application/json", "Authorization": `Bearer ${currentAccesToken}`}});
        const userToReturn = response.data;
        return userToReturn;
    } catch (error) {
      console.error(error);
      return null;
  }};


export const data = {
  login,
  register,
  refreshToken
}