<template>
  <view class="container">
    <app-loading v-if="!isAppReady"></app-loading>
    <app v-if="isAppReady"></app>
  </view>
</template>

<script>
import "../shim.js";
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import { AppLoading } from "expo";
import App from "./app.vue";
import store from "./store";

Vue.use(VueNativeBase);

export default {
  components: { App, AppLoading },
  data() {
    return {
      isAppReady: false
    };
  },
  created() {
    this.loadFonts();
  },
  methods: {
    async loadFonts() {
      try {
        this.isAppReady = false;

        await new Promise(resolve => {
          store._vm.$root.$on("storageReady", () => {
            console.log("stateBeingFilled", store.state);
            resolve();
          });
        });

        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });

        this.isAppReady = true;
      } catch (error) {
        console.log("some error occured", error);
        this.isAppReady = true;
      }
    }
  }
};
</script>

<style>
.container {
  flex: 1;
}
</style>