<template>
  <v-app dark>
    <AppsTheHeader />
    <v-main>
      <!-- <v-slide-x-transition group hide-on-leave> -->
      <template v-for="(item, itemInd) in $store.state.cart.S_notifications">
        <BaseSnackBar
          :key="itemInd"
          :notification="item"
          :style="[{ transform: `translateY(${itemInd * 60}px)` }]"
        />
      </template>
      <!-- </v-slide-x-transition> -->
      <Nuxt
        keep-alive
        :keep-alive-props="{
          exclude: [
            'pages/shop/_id.vue',
            'pages/checkout/index.vue',
            'pages/test.vue',
            'pages/shop/index.vue',
          ],
        }"
      />
    </v-main>
    <!-- TODO v-if="$route.name !== 'auth'" -->
    <LazyAppsTheFooter />
    <!-- <AppsTheScrollBtn /> -->
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
