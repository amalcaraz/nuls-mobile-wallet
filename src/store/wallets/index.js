import * as actions from "./actions";
import * as mutations from "./mutations";

export default {
  namespaced: true,
  state: {
    wallets: [],
  },
  getters: {
    wallets: (state) => state.wallets
  },
  actions,
  mutations,
};
