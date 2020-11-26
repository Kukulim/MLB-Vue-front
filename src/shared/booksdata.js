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

const createAuction = async function(book, currentAccesToken) {
  try {
    const response = await axios.post(`${API_LOCATION}/books/CreateAuction`, book, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentAccesToken}`
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
  createAuction,
};
