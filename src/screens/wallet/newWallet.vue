<template>
  <view class="container">
    <button
        :on-press="onPress"
        title="Create Wallet"
        color="#841584"
        accessibility-label="Create new NULS wallet"
    />
    <text v-if="wallet">{{wallet}}</text>
    <status-bar
        background-color="blue"
        bar-style="light-content"
    />
  </view>
</template>
 
<script>
import { Account } from 'nuls-js';

export default {
  navigationOptions: ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>
    )
  }),
  data: function() {
    return {
      wallet: null
    };
  },
  methods: {
    onPress() {
      this.wallet = new Account().create();
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
  color: black;
}
</style>
