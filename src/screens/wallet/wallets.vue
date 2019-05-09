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
          :rightOpenValue="-75"
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
    <auth-dialog v-if="fingerPrint"></auth-dialog>
  </nb-container>
</template> 
 
<script>
import { Account } from 'nuls-js';
import React from "react";
import { Button, Icon, Text, View, ListItem, Toast } from "native-base";
import { mapGetters } from 'vuex';
import { Wallet } from '../../models/wallet';
import { LocalAuthentication } from 'expo';
import AuthDialog from '../../components/authDialog';

 
// import { vuexPersist } from '../../store';

export default {
  components: {
    AuthDialog
  },
  created() { 

    // vuexPersist.storage.clear();
    // this.$store.dispatch('wallets/CLEAR_WALLETS');

    // const wallets = this.obtainWallets();
    // this.$store.dispatch('wallets/SAVE_WALLET', wallets[0]);
  },
  data() {
    return  {
      fingerPrint: false
    }
  },
  computed: {
    ...mapGetters('wallets', ['wallets']),
  },
  methods: {
    handleFabIconPress() {
      this.createWallet();
    },
    async requestAuth() {
      this.fingerPrint = true;
      const result = await LocalAuthentication.authenticateAsync();
      this.fingerPrint = false;
      return result;
    },
    async createWallet() {

      const result = await this.requestAuth();
      
      if (result.success) {

        const newWallet = new Account().create();
        this.$store.dispatch('wallets/SAVE_WALLET', newWallet);

        Toast.show({
          text: `New wallet created! \n${newWallet.address}`,
          type: "success",
          duration: 3000
        });

      } else {

        Toast.show({
          text: `Authentication failed :(`,
          type: "error",
          duration: 3000
        });

      }
    },
    deleteWallet(address) {
      this.$store.dispatch('wallets/DELETE_WALLET', address);
    },
    obtainWallets() {
      return Array.from({length: 1}, () => new Account().create());
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
