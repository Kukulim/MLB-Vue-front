
export const addItemAction = async ({ commit }, product) => {
  await commit("addItem", product);
};

export const removeItemAction = async ({ commit }, index) => {
  await commit("removeItem", index);
};