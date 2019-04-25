<template>
  <nb-container>
    <nb-header>
      <!-- <nb-left>
        <nb-button transparent>
          <nb-icon name="menu" />
        </nb-button>
      </nb-left> -->
      <nb-body>
        <nb-title>Header</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-text>Content goes here</nb-text>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import launchScreenBg from "../../assets/splash.png";
import launchscreenLogo from "../../assets/icon.png";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      launchScreenBg: launchScreenBg,
      launchscreenLogo: launchscreenLogo,
      stylesObj: {
        logoContainerStyle: {
          marginTop: Dimensions.get("window").height / 8
        },
        logoStyle: {
          left: Platform.OS === "android" ? 40 : 50,
          top: Platform.OS === "android" ? 35 : 60
        },
        btnContainer: {
          backgroundColor: "#6faf98",
          alignSelf: "center"
        }
      }
    };
  },
  methods: {
    handleLetGoBtnPress: function() {
      this.navigation.navigate("DrawerOpen");
    }
  }
};
</script>

 
<style>
.imageContainer {
  flex: 1;
}
.text-color-primary {
  color: blue;
  font-family: Roboto;
}
.logoContainer {
  flex: 1;
  margin-bottom: 30;
}
.logo {
  position: absolute;
  width: 280;
  height: 100;
}
.text-container {
  align-items: center;
  margin-bottom: 50;
  background-color: transparent;
}
.text-color-white {
  color: white;
}
.button-container {
  background-color: #6faf98;
  align-self: center;
}
</style>