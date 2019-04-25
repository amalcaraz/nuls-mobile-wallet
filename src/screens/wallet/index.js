import { StackNavigator } from "vue-native-router";
import NewWallet from "./newWallet.vue";
import Wallets from "./wallets.vue";

const WalletNavigation = StackNavigator(
  {
    Wallets,
    NewWallet
  }, 
  {
    headerMode: 'none'
  }
);

export default WalletNavigation;
