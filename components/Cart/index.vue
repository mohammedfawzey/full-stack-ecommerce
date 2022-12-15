<template>
  <v-app>
    <v-main class="pa-0 default-bg">
      <v-container>
        <div
          class="text-h4 font-weight-bold mb-6 mb-md-4"
          :class="{ 'text-center': $store.state.cart.S_cart.length <= 0 }"
        >
          Shopping Cart
        </div>
        <div class="content" v-if="$store.state.cart.S_cart.length >= 1">
          <v-row dense class="flex-column-reverse flex-md-row">
            <v-col cols="12" sm="12" md="9" lg="9">
              <CartShoppingItems />
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3">
              <CartSummary />
            </v-col>
          </v-row>
        </div>
        <div class="no-content" v-else>
          <v-img
          class="mx-auto"
            :src="require('@/assets/imgs/emptycart.svg')"
            width="300"
            height="300"
            contain
          >
            <template #placeholder>
              <BaseSkeletonLoader circle circle-width="1.5" />
            </template>
          </v-img>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
