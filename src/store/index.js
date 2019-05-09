import Vue from "vue-native-core";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { AsyncStorage } from "react-native";
import wallets from './wallets';

Vue.use(Vuex);

const vuexPersist = new VuexPersistence({
  strictMode: true,
  storage: AsyncStorage,
  asyncStorage: true,
  reducer: state => ({ wallets: state.wallets })
});

const vuexPersistEmitter = () => store => {
  store.subscribe(mutation => {
    console.log(mutation.type);
    if (mutation.type === "RESTORE_MUTATION") {
      // This is needed to fire the event after the listener has been setted up
      setTimeout(() => store._vm.$root.$emit("storageReady"), 0);
    }
  });
};

const store = new Vuex.Store({
  strict: true,
  plugins: [vuexPersist.plugin, vuexPersistEmitter()],
  mutations: { RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION }, 
  modules: {
    wallets
  },
});

Vue.prototype.$store = store;

export default store;
export { vuexPersist };