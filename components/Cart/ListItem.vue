<template>
  <v-row dense class="px-5 position-relative">
    <!-- img -->
    <v-col cols="9" sm="5">
      <div class="d-flex align-cener justify-center gap-10">
        <div class="img">
          <v-badge overlap color="base">
            <template #badge>
              <v-scroll-x-transition hide-on-leave>
                <span :key="`badge-${item.quantity}`">{{ item.quantity }}</span>
              </v-scroll-x-transition>
            </template>
            <v-img
              :width="C_imgWidth"
              :height="C_imgWidth"
              :contain="!$vuetify.breakpoint.xsOnly"
              :src="item.product.images[0]"
            >
              <template #placeholder>
                <BaseSkeletonLoader type="image" />
              </template>
            </v-img>
          </v-badge>
        </div>
        <v-hover v-slot="{ hover }">
          <v-list-item-title
            :class="{ 'base--text': hover }"
            @click="redirectToTheProduct"
            class="text-caption text-sm-body-2 pointer font-weight-bold"
            >{{ item.product.title }}</v-list-item-title
          >
        </v-hover>
      </div>
    </v-col>
    <!-- price -->
    <v-col class="hidden-xs-only" cols="4" sm="2">
      <div class="fill-height d-flex align-center justify-center">
        <v-list-item-title class="text-body-2 text-center font-weight-medium"
          >${{ item.product.price | formatMoney }}</v-list-item-title
        >
      </div>
    </v-col>
    <!-- qty -->
    <v-col :order="$vuetify.breakpoint.xsOnly ? 12 : ''" cols="4" sm="2">
      <div
        class="quantity-controller d-flex align-center justify-center fill-width fill-height"
      >
        <div
          class="quantity-wrapper d-flex align-center gap-16 justify-center pa-2 rounded-lg"
        >
          <v-btn
            @click="
              $store.commit('cart/M_decreaseProductQuantity', item.product)
            "
            x-small
            :width="C_quantityBtn"
            :height="C_quantityBtn"
            fab
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <!-- <v-chip label outlined x-small class="py-3 px-6">
            <span class="text-caption font-weight-bold">{{ item.quantity }}</span>
          </v-chip> -->
          <v-btn
            x-small
            :width="C_quantityBtn"
            @click="
              $store.commit('cart/M_increaseProductQuantity', item.product)
            "
            :height="C_quantityBtn"
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
    </v-col>
    <!-- subtotal -->
    <v-col cols="3" sm="2">
      <div class="fill-height d-flex align-center justify-center">
        <v-list-item-title
          class="base--text text-body-2 text-center font-weight-bold"
          >${{
            (item.quantity * item.product.price) | formatMoney
          }}</v-list-item-title
        >
      </div>
    </v-col>
    <!-- delete -->
    <v-col v-if="true" cols="8" sm="1">
      <div class="fill-height d-flex align-center justify-sm-center">
        <v-btn
          :fab="!$vuetify.breakpoint.xsOnly"
          :outlined="$vuetify.breakpoint.xsOnly"
          :small="$vuetify.breakpoint.xsOnly"
          :x-small="!$vuetify.breakpoint.xsOnly"
          color="error darken-1"
          @click="$store.commit('cart/M_deleteProduct', item.product)"
        >
          <span class="text-capitalize hidden-sm-and-up">remove</span>
          <v-icon :right="$vuetify.breakpoint.xsOnly"
            >mdi-delete-outline</v-icon
          >
        </v-btn>
      </div>
    </v-col>
    <div class="position-absolute d-none">
      <v-btn fab x-small color="error darken-1">
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </div>
  </v-row>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({
    imgWidth: 80,
  }),
  computed: {
    C_quantityBtn() {
      return this.$vuetify.breakpoint.lgAndUp ? 25 : 25;
    },
    C_imgWidth() {
      return this.$vuetify.breakpoint.xsOnly ? 65 : 80;
    },
  },
  methods: {
    redirectToTheProduct() {
      this.$router.push({ path: `/shop/${this.item.product.id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.quantity-wrapper {
  border: 1px solid #ddd;
}

.position-relative {
  position: relative;
  right: 0;
}
.position-absolute {
  position: absolute;
  right: 0;
}
</style>
