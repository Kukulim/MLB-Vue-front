
export const addItemAction = async ({ commit }, id) => {
    await commit("addItem", id);
  };

  export const removeItemAction = async ({ commit }, index) => {
    await commit("removeItem", index);
  };