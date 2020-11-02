import { booksdata } from '@/shared';


export const getTeamsAction = async ({ commit }, token) =>{
    const books = await booksdata.getBooksList(token);
    commit("setBooks", books);
  },