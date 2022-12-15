<template>
  <v-navigation-drawer
    v-model="drawer"
    right
    @input="checkNavigationStatus"
    app
    fixed
    width="300"
    disable-resize-watcher
    temporary
  >
    <!-- disable-route-watcher -->
    <v-sheet
      height="80px"
      class="px-4 py-1 d-flex align-center justify-space-between"
    >
      <div class="navigation-text">
        <span class="text-h6 font-weight-medium">Shopping Cart</span>
      </div>
      <div class="navigation-close">
        <v-btn icon @click="drawer = false">
          <v-icon size="20">mdi-close</v-icon>
        </v-btn>
      </div>
    </v-sheet>
    <v-divider />
    <v-scroll-x-transition hide-on-leave group>
      <div class="cart-content" key="cart-content" v-if="!isCartEmpty">
        <!-- buttons -->
        <v-card-text>
          <v-btn color="yellow darken-3" dark block large nuxt to="/checkout">
            <span class="text-capitalize">checkout</span>
          </v-btn>
          <v-btn
            block
            color="base"
            dark
            large
            class="mt-2"
            nuxt
            to="/cart"
            rounded
            outlined
          >
            <span class="text-capitalize">view all cart</span>
          </v-btn>
        </v-card-text>
        <v-divider />
        <!-- list-items -->
        <v-sheet
          color="transparnet"
          max-height="320"
          class="overflow-y-auto v-scroll-bar"
        >
          <v-list nav dense>
            <v-slide-x-transition group hide-on-leave>
              <template v-for="(item, itemInd) in $store.state.cart.S_cart">
                <AppsTheHeaderNavigationCartListItem
                  :key="itemInd"
                  :item="item"
                />
                <v-divider
                  class="my-1"
                  v-if="itemInd != $store.state.cart.S_cart.length - 1"
                  :key="`divider-${itemInd}`"
                />
              </template>
            </v-slide-x-transition>
          </v-list>
        </v-sheet>
      </div>
      <div class="cart-empty" key="cart-empty" v-else>
        <v-img
          :src="require('@/assets/imgs/emptycart.svg')"
          width="300"
          height="300"
          contain
        >
          <template #placeholder>
            <BaseSkeletonLoader circle circle-width="1.5" />
          </template>
        </v-img>
        <div class="text-center text-caption">no items to show</div>
        <div class="continue-shopping mt-4 mx-3">
          <v-btn
            block
            color="surface darken-2"
            @click="redirectThenCloseDrawer"
            dark
          >
            <!-- to="/shop"
            nuxt -->
            <span class="text-capitalize">continue shopping</span>
          </v-btn>
        </div>
      </div>
    </v-scroll-x-transition>
    <template #append v-if="$store.state.cart.S_cart.length >= 1">
      <v-card-text>
        <v-btn
          :disabled="isBtnClicked"
          :loading="isBtnClicked"
          block
          color="error darken-1"
          @click="deleteAllProducts"
        >
          <template #loader>
            <span class="text-capitalize">deleting...</span>
            <div class="custom-loader ml-3">
              <v-icon>mdi-cached</v-icon>
            </div>
          </template>
          <span class="text-capitalize">delete all</span>
          <v-icon right>mdi-delete-outline</v-icon>
        </v-btn>
      </v-card-text>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["NavigationCartStatus", "navigationCart"],
  data: () => ({
    drawer: false,
    isBtnClicked: false,
    delay: 250
  }),
  methods: {
    checkNavigationStatus() {
      // at any change
      this.NavigationCartStatus(this.drawer);
    },
    deleteAllProducts() {
      this.isBtnClicked = true;
      setTimeout(() => {
        this.$store.commit("cart/M_deleteAllProducts");
        this.isBtnClicked = false;
      }, this.delay); //TODO 1750
    },
    redirectThenCloseDrawer() {
      if (this.$route.name == "shop") {
        this.drawer = false;
      } else {
        new Promise((resolve) => {
          this.$router.push({ path: "/shop" });
          resolve("");
        }).then(() => {
          this.drawer = false;
        });
      }
    },
  },
  watch: {
    navigationCart(value) {
      this.drawer = value;
    },
  },
  computed: {
    isCartEmpty() {
      return this.$store.state.cart.S_cart.length <= 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
