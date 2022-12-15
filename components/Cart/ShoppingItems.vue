<template>
  <v-card id="shopping-cart-items" class="py-4 v-box-shadow">
    <v-row dense>
      <!-- head -->
      <v-col cols="12">
        <section
          id="shopping-items-head"
          class="grey pa-5 mx-2 mb-3 rounded-lg lighten-2 hidden-sm-and-down"
        >
          <v-row dense>
            <v-col
              v-for="(item, itemInd) in heads"
              :key="itemInd"
              :cols="item.grid"
              :class="{ 'text-center': itemInd !== 0 }"
            >
              <div class="text-body-2 font-weight-bold text-capitalize">
                {{ item.title }}
              </div>
            </v-col>
          </v-row>
        </section>
      </v-col>
    </v-row>
    <!-- loop -->
    <v-slide-x-transition group hide-on-leave>
      <template v-for="(item, itemInd) in $store.state.cart.S_cart">
        <!-- the cols -->
        <CartListItem :item="item" :key="itemInd" />
        <v-divider
          :key="`divider-${itemInd}`"
          v-if="itemInd != $store.state.cart.S_cart.length - 1"
          class="mb-4 mt-2 mt-sm-0"
        />
      </template>
    </v-slide-x-transition>
    <!-- checkout-btn show in sm-and-down -->
    <div class="hidden-md-and-up mt-5 sticky-checkout fill-width">
      <v-btn block large color="yellow darken-3" dark nuxt to="/checkout">
        <span class="text-capitalize">checkout</span>
        <span class="ml-2"
          >${{ $store.getters["cart/G_totalPrice"] | formatMoney }}</span
        >
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    heads: [
      { title: "item", grid: 5 },
      { title: "price", grid: 2 },
      { title: "qty", grid: 2 },
      { title: "subtotal", grid: 2 },
      { title: "", grid: 1 },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.sticky-checkout {
  position: sticky;
  bottom: 0;
}
</style>
