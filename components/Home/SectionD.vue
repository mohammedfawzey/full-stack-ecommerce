<template>
  <section id="home-d-feautures-products">
    <v-container class="badge-with-shadow" :fluid="$vuetify.breakpoint.xsOnly">
      <v-badge inline left color="base lighten-4">
        <div class="text-h6 font-weight-black ml-3">Featured Products</div>
      </v-badge>
      <v-divider class="mb-4" />
      <!-- <v-slide-x-transition group hide-on-leave> -->
      <v-row dense class="hidden-xs-only" key="row">
        <v-col
          v-for="(item, itemInd) in C_products"
          :key="itemInd"
          cols="6"
          sm="4"
          md="3"
          lg="2"
        >
          <BaseProductCard :item="item" />
        </v-col>
      </v-row>
      <v-slide-group class="hidden-sm-and-up" center-active key="slide-group">
        <v-slide-item
          v-for="(item, itemInd) in C_products"
          :key="itemInd"
          v-slot="{ active, toggle }"
        >
          <BaseProductCard :item="item" :slider="{ active, toggle }" />
        </v-slide-item>
      </v-slide-group>
      <!-- </v-slide-x-transition> -->
    </v-container>
  </section>
</template>

<script>
import productsData from "@/content/products/products.json";
export default {
  data: () => ({
    products: productsData,
  }),
  computed: {
    C_products() {
      return this.products
        .filter((el) => el.category.name.toLowerCase() !== "clothes")
        .slice(0, 12);
    },
  },
};
</script>

<style lang="scss" scoped></style>
