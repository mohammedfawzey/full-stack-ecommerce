<template>
  <v-hover v-slot="{ hover }">
    <v-list-item dense>
      <v-list-item-icon class="mr-4" v-if="item.product.images">
        <v-badge color="base" overlap>
          <template #badge>
            <v-slide-y-transition leave-absolute>
              <span :key="`${item.quantity}`">{{ item.quantity }}</span>
            </v-slide-y-transition>
          </template>
          <v-img width="60" height="60" :src="item.product.images[0]" contain>
            <template #placeholder>
              <BaseSkeletonLoader circle circle-width="1.5" x-small />
            </template>
          </v-img>
        </v-badge>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title
          :class="{ 'base--text': hover || C_isRouteInCurrentProduct }"
          @click="redirectToTheProduct"
          class="text-caption pointer font-weight-bold"
          >{{ item.product.title }}</v-list-item-title
        >
        <div class="quantity-controller mt-2 gap-16 d-flex align-center">
          <div class="quantity-wrapper d-flex align-center gap-8">
            <v-btn
              depressed
              color="indigo lighten-5"
              :disabled="item.quantity <= 0"
              fab
              x-small
              @click="
                $store.commit('cart/M_decreaseProductQuantity', item.product)
              "
              max-width="25"
              max-height="25"
            >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="indigo lighten-5"
              fab
              x-small
              @click="
                $store.commit('cart/M_increaseProductQuantity', item.product)
              "
              max-width="25"
              max-height="25"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
          <div class="product-price d-inline-block">
            <v-list-item-title
              class="font-weight-bold text-body-2 surface--text text--darken-2"
            >
              ${{ (item.product.price * item.quantity) | formatMoney }}
            </v-list-item-title>
          </div>
        </div>
      </v-list-item-content>
      <v-list-item-action class="ml-2">
        <v-btn
          x-small
          max-height="20"
          @click="$store.commit('cart/M_deleteProduct', item.product)"
          max-width="20"
          color="secondary lighten-1"
          fab
        >
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-hover>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    redirectToTheProduct() {
      this.$router.push({ path: `/shop/${this.item.product.id}` });
    },
  },
  computed: {
    C_isRouteInCurrentProduct() {
      return this.$route.path == `/shop/${this.item.product.id}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
