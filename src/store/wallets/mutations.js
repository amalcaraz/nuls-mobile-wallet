export function SAVE_WALLET(state, wallet) {
  state.wallets = [...state.wallets.filter((w) => w.address !== wallet.address), wallet];
}

export function DELETE_WALLET(state, address) {
  state.wallets = state.wallets.filter((wallet) => wallet.address !== address);
}

export function CLEAR_WALLETS(state) {
  state.wallets = [];
}