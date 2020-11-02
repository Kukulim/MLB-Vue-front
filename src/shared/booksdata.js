import * as axios from 'axios';

const server = "https://localhost:44338/api/Account/";

const getBooksList = async function (accessToken) {
  try {
    const response = await axios.get(`https://localhost:44338/api/books/`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    return response.data;
  } catch (error) {
    return "error";
  }
};

export const booksdata = {
  getBooksList
}