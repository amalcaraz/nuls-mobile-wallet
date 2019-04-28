import { SecureStore } from 'expo';

export async function SAVE_WALLET({ commit }, wallet) {
 
  await SecureStore.setItemAsync(wallet.address, wallet.prikey, { keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY });
  delete wallet.prikey;
 
  commit("SAVE_WALLET", wallet);

}

export async function DELETE_WALLET({ commit }, address) {

  await SecureStore.deleteItemAsync(address, { keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY });
  
  commit("DELETE_WALLET", address);

}

export function CLEAR_WALLETS({ commit }) {
  return commit("CLEAR_WALLETS");
}
