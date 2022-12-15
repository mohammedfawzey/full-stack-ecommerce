<template>
  <section id="home-c-trending-products">
    <v-container class="trending" :fluid="$vuetify.breakpoint.xsOnly">
      <v-badge inline left color="base lighten-4">
        <div class="text-h6 font-weight-black ml-3">Trending Products</div>
      </v-badge>
      <v-divider class="mb-4" />
      <v-row dense>
        <!-- offer-product -->
        <v-col class="offer product" cols="12" sm="5" md="4" lg="3">
          <BaseProductCard offer :item="offerProduct" />
        </v-col>
        <!-- trensing-products -->
        <v-col cols="12" sm="7" md="8" lg="9" class="mt-3 mt-sm-0">
          <!-- <v-slide-x-transition group hide-on-leave> -->
            <v-row dense class="hidden-xs-only" key="row">
              <!-- single product -->
              <v-col
                cols="12"
                sm="6"
                lg="4"
                v-for="(item, itemInd) in C_products"
                :key="itemInd"
              >
                <!-- :discount="itemInd == 2 || itemInd == 4 ? '33%' : ''" -->
                <BaseProductCard
                  :row="$vuetify.breakpoint.mdAndUp"
                  :item="item"
                />
              </v-col>
            </v-row>
            <v-slide-group
              :show-arrows="false"
              class="hidden-sm-and-up"
              center-active
              key="slide-group"
            >
              <v-slide-item
                v-for="(item, itemInd) in C_products"
                :key="itemInd"
                v-slot="{ active, toggle }"
              >
                <BaseProductCard :item="item" :slider="{ active, toggle }" />
              </v-slide-item>
            </v-slide-group>
          <!-- </v-slide-x-transition> -->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import products from "@/content/products/products.json";
export default {
  data: () => ({
    items: products,
  }),
  computed: {
    C_products() {
      return this.products;
    },
    products() {
      return this.$vuetify.breakpoint.mdAndUp
        ? this.items
            .filter((el) => el.category.name.toLowerCase() !== "clothes")

            .slice(0, 8)
        : this.items
            .filter((el) => el.category.name.toLowerCase() !== "clothes")
            .slice(0, 4);
    },
    offerProduct() {
      return products.find((el) => el.is_offer);
    },
  },
};
</script>

<style lang="scss" scoped></style>
