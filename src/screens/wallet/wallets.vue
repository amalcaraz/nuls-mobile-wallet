<template>
  <nb-container>
    <nb-header>
      <nb-body>
        <nb-title>Wallets</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content :scrollEnabled="true">
      <nb-list>
        <nb-swipe-row 
          v-for="wallet in wallets"
          :key="wallet.address"
          :leftOpenValue="75"
          :rightOpenValue="-75"
          :left="getSwipeLeftComponet(wallet)"
          :body="getSwipeBodyComponet(wallet)"
          :right="getSwipeRightComponet(wallet)"
        />
      </nb-list>
    </nb-content>
     <nb-fab 
        :onPress="handleFabIconPress"
        direction="up" 
        position="bottomRight">
        <nb-icon-nb name="md-add"></nb-icon-nb>
      </nb-fab>
  </nb-container>
</template>
 
<script>
import { Account } from 'nuls-js';
import React from "react";
import { Button, Icon, Text, View, ListItem } from "native-base";

export default {
  data() {
    return {
      wallets: []
    };
  },
  created() {
    this.wallets = this.obtainWallets();
  },
  methods: {
    handleFabIconPress() {
      this.createWallet();
    },
    createWallet() {
      const newWallet = new Account().create();
      alert(`New wallet created \n ${newWallet.address}`);
      this.wallets.push(newWallet);
    },
    deleteWallet(address) {
      this.wallets = this.wallets.filter((wallet) => wallet.address !== address);
    },
    obtainWallets() {
      return Array.from({length: 1}, () => new Account().create());
    },
    getSwipeLeftComponet(wallet) {
      return (
        <Button success onPress={() => alert("Add")}>
          <Icon active name="add" />
        </Button> 
      );
    },
    getSwipeBodyComponet(wallet) {
      return (
        <View>
          <Text>{wallet.address}</Text>
        </View>
      );
    },
    getSwipeRightComponet(wallet) {
      return (
        <Button danger onPress={() => this.deleteWallet(wallet.address)}>
          <Icon active name="trash" />
        </Button>
      );
    }
  }
};
</script>
