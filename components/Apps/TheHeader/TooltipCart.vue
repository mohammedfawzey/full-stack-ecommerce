<template>
  <v-tooltip
    bottom
    color="base lighten-1"
    content-class="v-tooltip-with-arrow text-small py-1 px-2"
    transition="slide-y-reverse-transition"
    open-delay="750"
  >
    <template #activator="{ attrs, on }">
      <v-badge overlap transition="slide-x-transition" color="base">
        <!-- :content="cartLength" -->
        <template #badge>
          <v-slide-y-transition leave-absolute>
            <span :key="`${cartLength}-cart-products`">{{ cartLength }}</span>
          </v-slide-y-transition>
        </template>
        <v-btn
          icon
          text
          exact
          exact-path
          :input-value="$route.name == 'cart'"
          v-on="on"
          v-bind="attrs"
          @click="showNavigationCart"
        >
          <v-icon size="20">mdi-cart-outline</v-icon>
        </v-btn>
      </v-badge>
    </template>
    <template #default>
      <span class="text-capitalize" v-text="'shopping cart'" />
    </template>
  </v-tooltip>
</template>

<script>
export default {
  methods: {
    showNavigationCart() {
      this.$emit("showNavigationCart");
    },
  },
  computed: {
    cartLength() {
      return this.$store.state.cart.S_cart.length;
    },
  },
};
</script>
