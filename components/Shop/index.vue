<template>
  <v-app>
    <v-main class="pa-0" style="background-color: #f5f5f5">
      <v-container
        :fluid="$vuetify.breakpoint.smAndDown"
        class="pa-2 py-2 pa-sm-3"
      >
        <v-row dense>
          <v-col md="4" lg="3" class="hidden-sm-and-down">
            <ShopTheFilter :searching="searching" />
          </v-col>
          <v-col md="8" lg="9">
            <ShopTheSearchResult :products="products" />
          </v-col>
        </v-row>
      </v-container>
      <div class="filter-mobile hidden-md-and-up">
        <v-sheet width="100%" color="transparent" class="d-flex align-center">
          <v-btn
            class="rounded-0"
            color="base"
            @click="toggleGrid"
            dark
            v-if="false"
          >
            <v-icon>mdi-view-grid</v-icon>
          </v-btn>
          <v-btn
            class="rounded-0"
            block
            color="base darken-1"
            dark
            @click="FilterDialogStatus(true)"
          >
            <span class="text-capitalize">filters</span>
            <v-icon right>mdi-filter</v-icon>
          </v-btn>
        </v-sheet>
      </div>
      <v-dialog
        fullscreen
        transition="scroll-y-transition"
        v-model="filterDialog"
        v-if="$vuetify.breakpoint.smAndDown"
      >
        <!-- class="hidden-md-and-up" -->
        <!-- <v-card color="#f5f5f5"> -->
        <ShopTheFilter mobile @closeShopFilter="FilterDialogStatus(false)" />
        <!-- </v-card> -->
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import productData from "@/content/products/products.json";
export default {
  data: () => ({
    filterDialog: false,
    products: productData,
  }),
  methods: {
    searching(search) {
      if (!search) {
        this.products = productData;
      } else {
        this.products = productData.filter((el) => {
          return el.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
      }
      return this.products;
    },
    FilterDialogStatus(value) {
      this.filterDialog = value;
      //
      // const query = { search_dialog: value };
      // "search" in this.$route.query
      //   ? (query["search"] = this.$route.query.search)
      //   : "";
      const query = { ...this.$route.query, search_dialog: value };
      this.$router.push({ query });
    },
  },
  watch: {
    "$route.query"(value) {
      if (!value.search_dialog) return;
      const queryDialog = JSON.parse(value.search_dialog);
      if (queryDialog && queryDialog == true) {
        this.FilterDialogStatus(true);
      }
      if (queryDialog == false) {
        this.FilterDialogStatus(false);
      }
    },
  },
  mounted() {
    console.log(
      "this.$route.query.search_dialog",
      this.$route.query.search_dialog
    );
    if (!this.$route.query.search_dialog) return;
    if (JSON.parse(this.$route.query.search_dialog) == true) {
      this.FilterDialogStatus(true);
    }
  },
};
</script>

<style lang="scss" scoped>
.filter-mobile {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
