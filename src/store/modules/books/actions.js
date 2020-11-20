import { booksdata } from "@/shared";

export const getCurrentUserBooksAction = async ({ commit }, token) => {
  const books = await booksdata.getBooksList(token);
  commit("setCurrentUserBooks", books);
};
