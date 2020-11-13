import { booksdata } from "@/shared";

export const getBooksAction = async ({ commit }, token) => {
  const books = await booksdata.getBooksList(token);
  commit("setBooks", books);
};
