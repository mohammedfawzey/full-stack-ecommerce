<template>
  <v-app>
    <v-main class="pa-0">
      <!-- {{ C_theProduct }} -->
      <v-container>
        <!-- if product exist -->
        <div class="show-if-content" v-if="C_theProduct && C_theProduct.images">
          <v-row dense>
            <!-- carousle-imgs -->
            <v-col sm="6" ref="col" id="my-col">
              <v-card color="transparent mx-auto" flat :max-width="C_width">
                <v-carousel
                  id="image-carousel"
                  v-model="activeImg"
                  hide-delimiters
                  show-arrows-on-hover
                  :height="C_height"
                >
                  <template #prev>
                    <v-btn
                      fab
                      :small="$vuetify.breakpoint.smAndDown"
                      color="transparent"
                      @click="activeImg--"
                    >
                      <BaseArrow left />
                    </v-btn>
                  </template>
                  <template #next>
                    <v-btn
                      :small="$vuetify.breakpoint.smAndDown"
                      fab
                      color="transparent"
                      @click="activeImg++"
                    >
                      <BaseArrow right />
                    </v-btn>
                  </template>
                  <v-carousel-item
                    eager
                    v-for="(item, itemInd) in C_theProduct.images"
                    :key="itemInd"
                  >
                    <!-- contain -->
                    <!-- aspect-ratio="640/480" -->
                    <v-img
                      :src="item"
                      contain
                      :width="C_width"
                      eager
                      height="100%"
                      :min-height="$vuetify.breakpoint.mdAndUp ? 325 : C_height"
                    >
                      <template #placeholder>
                        <BaseSkeletonLoader type="image,image,image" />
                      </template>
                    </v-img>
                  </v-carousel-item>
                  <!-- mini-images -->
                  <div
                    class="mini-images d-flex align-center gap-5 pa-3 mt-3 justify-center"
                  >
                    <div
                      v-ripple
                      class="pointer image-box"
                      @click="activeImg = itemInd"
                      v-for="(item, itemInd) in C_theProduct.images"
                      :key="itemInd"
                      :style="[{ width: `${100 / 3}%` }]"
                    >
                      <v-hover v-slot="{ hover }">
                        <v-img
                          class="the_image"
                          contain
                          :class="{
                            'not-active-img': activeImg !== itemInd && !hover,
                          }"
                          :src="item"
                          :min-height="C_miniImage"
                          width="100%"
                        >
                          <template #placeholder>
                            <BaseSkeletonLoader type="image" />
                          </template>
                        </v-img>
                      </v-hover>
                    </div>
                  </div>
                </v-carousel>
              </v-card>
            </v-col>
            <!-- product data -->
            <v-col sm="6">
              <v-card
                class="product-info text-center text-sm-left mx-auto transparent px-2 pl-sm-8 pl-lg-0"
                flat
              >
                <div class="product-title">
                  <div
                    class="text-h5 mt-3 mt-sm-0 text-sm-h5 text-md-h4 font-weight-black"
                  >
                    {{ C_theProduct.title }}
                  </div>
                </div>
                <div
                  class="product-rating mt-1 mb-6 d-flex align-center justify-center justify-sm-start gap-5"
                >
                  <v-rating
                    dense
                    readonly
                    small
                    color="yellow darken-2"
                    background-color="yellow darken-1"
                    half-increments
                    :value="3.5"
                  ></v-rating>
                  <v-chip label x-small class="px-4" outlined>
                    <span class="text-caption">2.225</span>
                  </v-chip>
                  <span class="text-caption grey--text">reviews</span>
                </div>
                <v-card-text class="pa-0 product-descrption">
                  <p class="text-subtitle-2">
                    {{ C_theProduct.description }}
                  </p>
                </v-card-text>
                <div
                  class="price-box d-flex align-center justify-center justify-sm-start gap-5"
                >
                  <span class="text-h5 font-weight-bold surface--text">
                    ${{ C_theProduct.price | formatMoney }}
                  </span>
                  <del class="grey--text text--darken-1"
                    >${{ 100000 | formatMoney }}</del
                  >
                </div>
                <ShopTheProductContent
                  :the-product="C_theProduct"
                  class="hidden-sm-and-down"
                />
              </v-card>
            </v-col>
          </v-row>
          <ShopTheProductContent
            :the-product="C_theProduct"
            class="hidden-md-and-up"
          />
        </div>

        <!-- else no product -->
        <v-card class="mx-auto" max-width="500" flat v-else>
          <v-img :src="require('@/assets/imgs/no-items-found.webp')"></v-img>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import productsData from "@/content/products/products.json";
export default {
  data: () => ({
    products: productsData,
    activeImg: 0,
    ratio: 640 / 480, //w/h
    activeColor: 2,
    activeSize: 2,
  }),
  mounted() {
    this.getSingleProduct();
  },
  computed: {
    C_theProduct() {
      return this.$store.state.cart.S_singleProduct;
    },
    C_width() {
      //image
      return this.$vuetify.breakpoint.mdAndUp
        ? 500 //500
        : this.$vuetify.breakpoint.smOnly
        ? 300
        : 300; //width  == ratio * 480
    },
    C_height() {
      // carousel
      return Number(this.C_width) / Number(this.ratio); // 480
    },
    C_miniImage() {
      return this.$vuetify.breakpoint.lgAndUp
        ? 85
        : this.$vuetify.breakpoint.mdOnly
        ? 70
        : 52;
    },
  },
  methods: {
    getSingleProduct() {
      // check first if store/state/S_singleProduct has product
      if (this.$store.state.cart.S_singleProduct === {}) return;
      // S_singleProduct = {}
      const FIND_THE_PRODUCT = this.products.find(
        (el) => el.id == this.$route.params.id
      );
      this.$store.commit("cart/M_getSingleProduct", FIND_THE_PRODUCT);
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "~vuetify/src/styles/styles.sass";
@import "~vuetify/src/styles/styles.sass";
.full-width {
  width: 100%;
}
.mini-images {
  position: absolute;
  bottom: 0;
  @media #{map-get($display-breakpoints,'md-and-up')} {
    width: 80% !important;
  }
  width: 90%;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
}
.image-box {
  border: 5px solid white;
}
.not-active-img {
  // filter: blur(0.7px) contrast(0.8);
  opacity: 0.7 !important;
}
.the_image {
  transition: 0.3s opacity;
}
</style>
