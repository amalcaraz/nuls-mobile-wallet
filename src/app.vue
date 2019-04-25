<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import React from "react";
import { Dimensions, Platform, StatusBar } from "react-native";
import { StackNavigator, DrawerNavigator, TabNavigator } from "vue-native-router";
import { Root } from "native-base";
import Home from "./screens/home.vue";
import WalletNavigation from "./screens/wallet";

import SideBarNav from "./screens/sidebar.vue";
import TabBar from "./screens/tabbar.vue";
import Expo from 'expo';

const Drawer = DrawerNavigator(
  {
    Home,
    Wallet: WalletNavigation
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: SideBarNav
  }
);

const TabNav = TabNavigator(
  {
    Home,
    Wallet: WalletNavigation
  },
  {
    initialRouteName: "Wallet",
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarComponent: TabBar
  }
);

const AppNavigation = StackNavigator(
  {
    Drawer,
    TabNav
  },
  {
    initialRouteName: "TabNav",
    headerMode: 'none',
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fabada',
    // },
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
);
export default {
  components: { Root, AppNavigation }
};
</script> 