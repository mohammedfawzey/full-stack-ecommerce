<template>
  <!-- 90 -->
  <section
    class="white py-3"
    :style="[C_products.length >= 1 ? { 'min-height': '130vh' } : {}]"
    :class="{ 'padding-load': !C_loadedAllProducts && C_products.length >= 1 }"
  >
    <!-- TODO v-scroll="checkIfReachBottom" -->
    <v-container
      fluid
      class="pa-0"
      id="products-wrapper"
      v-show="C_products.length >= 1"
    >
      <v-scroll-x-transition group class="row row--dense">
        <v-col
          v-for="(item, itemInd) in C_products"
          :key="itemInd"
          cols="6"
          sm="4"
          lg="3"
        >
          <BaseProductCard :item="item" />
        </v-col>
      </v-scroll-x-transition>
      <div class="mx-auto max-w max-h">
        <!-- color="base" -->
        <!-- <v-btn
          class="my-2 mx-auto"
          icon
          v-if="loadMoreProducts && !C_loadedAllProducts"
          :loading="true"
        >
        </v-btn> -->
        <v-btn
          v-if="!C_loadedAllProducts"
          outlined
          @click="showMoreProducts"
          :loading="loadMoreProducts"
          color="grey"
          class="py-5 px-6 my-2"
          small
        >
          <span class="text-capitalize">show more</span>
        </v-btn>
      </div>
    </v-container>
    <v-container fluid class="pa-0" v-if="C_products.length <= 0">
      <v-img :src="require('@/assets/imgs/no-items-found.webp')">
        <template #placeholder>
          <div class="image-placeholder fill-height">
            <BaseSkeletonLoader type="image" />
          </div>
        </template>
      </v-img>
    </v-container>
  </section>
</template>

<script>
import productsData from "@/content/products/products.json";
export default {
  data: () => ({
    products: productsData,
    maxProducts: 0, //lg - xs=2 - sm||md => 3
    loadMoreProducts: false,
  }),
  computed: {
    C_products() {
      // const isFirstLoad =
      //   this.maxProducts == 0 ? this.C_increase : this.maxProducts;
      return this.products.slice(0, this.maxProducts + this.C_increase * 2); //(0,0+4)
    },
    C_increase() {
      return this.$vuetify.breakpoint.lgAndUp
        ? 4
        : this.$vuetify.breakpoint.xsOnly
        ? 2
        : 3;
    },
    C_loadedAllProducts() {
      return this.maxProducts + this.C_increase * 2 >= this.products.length;
    },
    C_filterOptions() {
      const category = this.$route.query.category || "";
      const search = this.$route.query.search || "";
      const price = {
        min: this.$route.query.min || 0,
        max: this.$route.query.max || 2000,
      };
      return { category, search, price };
    },
  },
  mounted() {
    // if (
    //   this.$route.query.search ||
    //   this.$route.query.min ||
    //   this.$route.query.max ||
    //   this.$route.query.category
    // ) {
    this.getProducts();
    // }
  },
  methods: {
    getProducts() {
      this.maxProducts = 0;
      this.loadMoreProducts = false;
      // category first
      this.products = productsData.filter((el) => {
        return (
          el.category.name
            .toLowerCase()
            .indexOf(this.C_filterOptions.category) != -1 &&
          el.title.toLowerCase().indexOf(this.C_filterOptions.search) != -1 &&
          Number(el.price) >= Number(this.C_filterOptions.price.min) &&
          Number(el.price) <= Number(this.C_filterOptions.price.max)
        );
      });
      // this.products = productsData.filter((el) => {
      //   return el.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      // });
    },
    async showMoreProducts() {
      this.loadMoreProducts = true;
      await new Promise((resolve) => {
        setTimeout(() => {
          this.maxProducts += this.C_increase * 2;
          this.loadMoreProducts = false;
          resolve("products loaded");
        }, 750);
      });
    },
    async checkIfReachBottom() {
      const windowHeight = window.innerHeight;
      const wrapper = document.getElementById("products-wrapper");
      if (!wrapper) return;
      const wrapperHeight = wrapper.offsetHeight;
      const statement = windowHeight + scrollY >= wrapperHeight;
      if (statement && !this.loadMoreProducts && !this.C_loadedAllProducts) {
        this.loadMoreProducts = true;
        await this.showMoreProducts();
      }
    },
    scrollTo(target) {
      this.$vuetify.goTo(target, { duration: 1000 });
    },
    isComponentLoaded() {
      var tid = setInterval(function () {
        if (document.readyState !== "complete") return;
        clearInterval(tid);
        // do your work
      }, 100);
    },
  },
  watch: {
    "$route.query"(value) {
      if (value.search || value.category || value.search_dialog) {
        this.scrollTo(0);
        this.getProducts();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.padding-load {
  padding-bottom: 520px;
}
</style>
