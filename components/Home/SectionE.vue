<template>
  <section id="home-d-brutal-force">
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, itemInd) in C_products"
          :key="itemInd"
          cols="12"
          sm="6"
        >
          <v-hover v-slot="{ hover }" :open-delay="100">
            <v-img
              :src="item.images[0]"
              max-height="360"
              :width="C_img.width"
              :height="C_img.height"
              position="center"
            >
              <template #placeholder>
                <BaseSkeletonLoader type="image,image" />
              </template>
              <v-scroll-x-transition v-if="isLoaded">
                <!-- color="transparent" -->
                <v-card
                  v-if="hover || $vuetify.breakpoint.xsOnly"
                  flat
                  class="custom-bg fill-height pl-3 pl-sm-5 pl-md-8 d-flex flex-column align-start justify-center"
                  color="transparent"
                >
                  <div
                    class="text-h6 text-sm-h5 text-md-h4 mb-2 font-weight-bold white px-2"
                  >
                    Brutal Sale!
                  </div>
                  <!-- <div class="text-h5 white my-2 surface--text">Discount Every Day</div> -->
                  <div
                    class="text-h6 text-sm-h5 text-md-h4 font-weight-bold white--text base px-2"
                  >
                    {{ C_title(item.title) }}
                  </div>
                  <v-card-actions class="mt-1 mt-sm-3">
                    <v-btn
                      color="surface darken-1"
                      :large="$vuetify.breakpoint.lgAndUp"
                      dark
                      rounded
                      class="px-sm-6 px-lg-8"
                      depressed
                    >
                      <span class="text-capitalize">shop now</span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-scroll-x-transition>
            </v-img>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import productsData from "@/content/products/products.json";
export default {
  data: () => ({
    products: productsData,
    isLoaded: false,
  }),
  computed: {
    C_products() {
      return this.products
        .filter((el) => el.category.name.toLowerCase() !== "clothes")
        .slice(0, 2);
    },
    C_title() {
      // return text that less than 16 length
      const maxLength = 16;
      return (title) => {
        return title.split(" ").reduce((a, c) => {
          return a.length + c.length <= maxLength ? a + " " + c : a;
        });
      };
    },
    C_img() {
      return this.$vuetify.breakpoint.lgAndUp
        ? { width: 575, height: 360 }
        : this.$vuetify.breakpoint.mdOnly
        ? { width: 430, height: 325 }
        : { width: 575, height: 360 };
    },
  },
  mounted() {
    this.isLoaded = true;
  },
};
</script>

<style lang="scss" scoped>
.custom-bg {
  background-image: linear-gradient(to right, #000, transparent) !important;
}
</style>
