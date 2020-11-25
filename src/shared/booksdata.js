import * as axios from "axios";
import { API_LOCATION } from "../../config";

const getBooksList = async function(accessToken) {
  try {
    const response = await axios.get(`${API_LOCATION}/books/`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    return response.data;
  } catch (error) {
    return "error";
  }
};

const getAllBooks = async function() {
  try {
    const response = await axios.get(`${API_LOCATION}/books/`, {
      headers: {
        "Content-Type": "application/json",
      }, 
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const booksdata = {
  getBooksList,
  getAllBooks,
};
