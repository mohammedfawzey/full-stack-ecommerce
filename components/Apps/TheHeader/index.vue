<template>
  <nav>
    <AppsTheHeaderAppBar
      @showNavigationFavourite="NavigationFavouriteStatus"
      @showNavigationCart="NavigationCartStatus"
      @showNavigation="navigationStatus"
    />
    <AppsTheHeaderNavigation
      :navigation="navigation"
      :navigation-status="navigationStatus"
    />
    <AppsTheHeaderNavigationCart
      :navigation-cart="navigationCart"
      :NavigationCartStatus="NavigationCartStatus"
    />
    <AppsTheHeaderNavigationFavourite
      v-if="false"
      :navigation-favourite="navigationFavourite"
      :NavigationFavouriteStatus="NavigationFavouriteStatus"
    />
  </nav>
</template>
<script>
export default {
  data: () => ({
    navigation: false,
    navigationCart: false,
    navigationFavourite: false,
  }),
  methods: {
    navigationStatus(value) {
      // update in AppBar && Drawer
      if (value.clicked) {
        // toggle drawer
        this.navigation = !this.navigation;
      } else {
        this.navigation = value;
      }
    },
    // update in TooltipCart && DrawerCart
    NavigationCartStatus(value) {
      if (value.clicked) {
        this.navigationCart = !this.navigationCart;
      } else {
        this.navigationCart = value;
      }
    },
    // update in TooltipFavourite && DrawerFavourite
    NavigationFavouriteStatus(value) {
      if (value.clicked) {
        this.navigationFavourite = !this.navigationFavourite;
      } else {
        this.navigationFavourite = value;
      }
    },
  },
};
</script>
