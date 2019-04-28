import { SecureStore } from 'expo';

export async function getPrivateKey(address) {

  return await SecureStore.getItemAsync(address, { keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY });

}