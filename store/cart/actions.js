export default {
  A_addToCart({ commit }, payload) {
    commit("M_addToCart", payload);
    commit("M_addNotification");
  },
};
