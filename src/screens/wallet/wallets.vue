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
import { mapGetters } from 'vuex';
// import { vuexPersist } from '../../store';
 
export default {
  created() { 
    // vuexPersist.storage.clear();
    // this.$store.dispatch('wallets/CLEAR_WALLETS');

    // const wallets = this.obtainWallets();
    // this.$store.dispatch('wallets/SAVE_WALLET', wallets[0]);
  },
  computed: {
    ...mapGetters('wallets', ['wallets']),
  },
  methods: {
    handleFabIconPress() {
      this.createWallet();
    },
    createWallet() {
      const newWallet = new Account().create();
      alert(`New wallet created! \n${newWallet.address}`);
      this.$store.dispatch('wallets/SAVE_WALLET', newWallet);
    },
    deleteWallet(address) {
      this.$store.dispatch('wallets/DELETE_WALLET', address);
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
