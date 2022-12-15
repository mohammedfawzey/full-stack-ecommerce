<template>
  <v-card
    class="px-3 py-6 px-sm-6 v-box-shadow sticky-element mx-auto"
    max-width="500"
  >
    <v-divider class="mb-4 mt-8" />
    <div class="text-h4 font-weight-bold">Order Summary</div>
    <v-card-text class="px-2">
      <div
        v-for="(item, itemInd) in items"
        :key="itemInd"
        class="d-flex align-center mb-1 justify-space-between"
      >
        <div
          :class="[
            item.isTotal
              ? 'text-h5 black--text font-weight-black'
              : 'text-body-2',
          ]"
          class="text-capitalize"
        >
          {{ item.title }}
        </div>
        <div class="base--text font-weight-bold">
          <span v-if="item.isTotal">
            ${{ $store.getters["cart/G_totalPrice"] | formatMoney }}
          </span>
          <span v-else v-text="'$' + item.price" />
        </div>
        <!-- {{ $store.getters["cart/G_totalPrice"] | formatMoney }} -->
      </div>
    </v-card-text>
    <v-divider />
    <div class="pa-1">
      <v-list dense>
        <v-sheet max-height="240" class="v-scroll-bar overflow-y-auto">
          <template v-for="(item, itemInd) in $store.state.cart.S_cart">
            <CheckoutListItem :key="itemInd" :item="item" />
            <v-divider
              :key="`divider-${itemInd}`"
              v-if="itemInd != $store.state.cart.S_cart.length - 1"
              class="my-2"
            />
          </template>
        </v-sheet>
      </v-list>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "subtotal",
        price: 462,
      },
      {
        title: "discount",
        price: 100,
      },
      {
        title: "shipping flat",
        price: 10,
      },
      {
        title: "total",
        isTotal: true,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
