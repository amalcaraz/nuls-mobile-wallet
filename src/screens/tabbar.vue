<template>
  <nb-footer>
    <nb-footer-tab>
      <nb-button v-for="item in items" :key="item.route" :on-press="() => handleItemClick(item)">
        <nb-icon :name="item.icon" />
        <nb-text>{{item.name}}</nb-text>
      </nb-button>
    </nb-footer-tab>
  </nb-footer>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      items: [
        {
          name: 'Home',
          route: 'Home',
          icon: 'home',
        },
        {
          name: 'Wallets',
          route: 'Wallet',
          icon: 'wallet',
        }
      ]
    }
  },
  methods: {
    handleItemClick(item) {
      this.navigation.navigate(item.route);
    }
  }
}
</script>
