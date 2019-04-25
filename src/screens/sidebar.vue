<template>
  <nb-container>
    <nb-content class="sidebar-content-wrapper" :bounces="false">
      <image :source="drawerCover" class="drawer-cover" :style="stylesObj.drawerCoverObj"/>
      <image :source="drawerImage" class="drawer-image" :style="stylesObj.drawerImageObj"/>
      <nb-list>
        <nb-list-item v-for="data in datas" :key="data.route" button noBorder :onPress="() => handleListItemClick(data)">
          <nb-left>
            <nb-icon
              active
              :name="data.icon"
              :style="{ color: '#777', fontSize: 26, width: 30 }"
            />
            <nb-text>
              {{data.name}}
            </nb-text>
          </nb-left>
          <nb-right v-if="data.types" :style="{flex: 1}">
            <nb-badge class="list-item-badge-container" :style="{backgroundColor: data.bg}">
              <nb-text class="list-item-badge-text" :style="stylesObj.badgeText">
                {{`${data.types} Types`}}
              </nb-text>
            </nb-badge>
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import drawerCover from "../../assets/splash.png";
import drawerImage from "../../assets/icon.png";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      drawerCover: drawerCover,
      drawerImage: drawerImage,
      stylesObj: {
        drawerCoverObj: {
          height: deviceHeight / 3.5
        },
        drawerImageObj: {
          left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
          top:
            Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
          resizeMode: "cover"
        },
        badgeText: {
          fontSize: Platform.OS === "android" ? 11 : 13,
          marginTop: Platform.OS === "android" ? -3 : 0,
          fontWeight: "400"
        }
      },
      datas: [
        {
          name: "New Wallet",
          route: "NewWallet",
          icon: "phone-portrait",
          bg: "#C5F442"
        },
        {
          name: "Actionsheet",
          route: "Actionsheet",
          icon: "easel",
          bg: "#C5F442"
        },
        {
          name: "Header",
          route: "Header",
          icon: "phone-portrait",
          bg: "#477EEA",
          types: "10"
        },
        {
          name: "Footer",
          route: "Footer",
          icon: "phone-portrait",
          bg: "#DA4437",
          types: "4"
        },
        {
          name: "Badge",
          route: "NHBadge",
          icon: "notifications",
          bg: "#4DCAE0"
        },
      ]
    };
  },
  methods: {
    handleListItemClick: function(dataObj) {
      this.navigation.navigate(dataObj.route);
    }
  }
};
</script>

<style>
.sidebar-content-wrapper {
  flex: 1;
  background-color: #fff;
}
.drawer-cover {
  flex: 1;
  align-self: stretch;
  position: relative;
  margin-bottom: 10;
}
.drawer-image {
  align-self: center;
  position: absolute;
  height: 75;
  width: 210;
}
.list-item-badge-container {
  border-radius: 3;
  height: 25;
  width: 72;
}
.list-item-badge-text {
  /* font-weight: 400; // not-working  */
  /* font-weight: bold; // working */
  text-align: center;
}
</style>


