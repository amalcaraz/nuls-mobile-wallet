<template>
  <view class="container">
    <button
        :on-press="onPress"
        title="Create Wallet"
        color="#841584"
        accessibility-label="Create new NULS wallet"
    />
    <text v-if="wallet">{{wallet}}</text>
  </view>
</template>
 
<script>
import './shim.js';
import { Account } from 'nuls-js';

export default {
  data: function() {
    return {
      wallet: null
    };
  },
  methods: {
    onPress() {
      this.wallet = new Account().create();
      console.log(this.wallet);
    }
  }
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
