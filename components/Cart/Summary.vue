<template>
  <v-card class="v-box-shadow py-3" max-width="">
    <div class="pa-3 pa-md-2 text-body-1 text-uppercase font-weight-bold">
      cart summary
    </div>
    <v-divider />
    <div class="pa-3 pa-md-2">
      <div class="text-body-1">
        total items(<b>{{ $store.state.cart.S_cart.length }}</b
        >)
      </div>
      <div class="d-flex text-caption mt-2 align-center justify-space-between">
        <div class="text-small">Reckitt Benckiser<br />Official Store</div>
        <span class="success--text font-weight-medium"
          >EGP <span>50,00</span></span
        >
      </div>
    </div>
    <v-divider />
    <div
      class="d-flex font-weight-bold pa-3 pa-md-2 text-body-1 mt-2 align-center justify-space-between"
    >
      <span>Subtotal</span>
      <div class="base--text">
        <span>${{ $store.getters["cart/G_totalPrice"] | formatMoney }}</span>
      </div>
    </div>
    <div class="hidden-sm-and-down">
      <v-divider />
      <div class="pa-3 pa-md-2">
        <v-btn block large nuxt to="/checkout" color="yellow darken-3" dark>
          <span class="text-capitalize">checkout</span>
          <span class="ml-2"
            >${{ $store.getters["cart/G_totalPrice"] | formatMoney }}</span
          >
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  // computed:{
  //     C_padding() {
  //         return this.$vuetify.breakpoint.mdAndUp?
  //     }
  // }
};
</script>

<style lang="scss" scoped></style>
