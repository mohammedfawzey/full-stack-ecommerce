<script>
export default {
  data: () => ({
    activeColor: 2,
    activeSize: 2,
    isBtnClicked: false,
    delay: 250, //TODO 750
  }),
  props: ["theProduct"],
  methods: {
    addToCart() {
      this.isBtnClicked = true;
      setTimeout(() => {
        new Promise((resolve) => {
          this.$store.commit("cart/M_addToCart", this.theProduct);
          resolve("");
        }).then(() => {
          this.$store.commit("cart/M_addNotification");
          this.isBtnClicked = false;
        });
      }, this.delay);
    },
    increaseProductQuantity() {
      this.isBtnClicked = true;
      setTimeout(() => {
        new Promise((resolve) => {
          this.$store.dispatch("cart/A_addToCart", this.theProduct);
          resolve("");
        }).then(() => {
          this.isBtnClicked = false;
        });
      }, this.delay);
    },
    decreaseProductQuantity() {},
  },
  computed: {
    C_isProductInCart() {
      return this.$store.getters["cart/G_isProductInCart"](this.theProduct);
    },
    C_productQuantity() {
      return this.$store.state.cart.S_cart.find(
        (el) => el.product.id == this.theProduct.id
      ).quantity;
    },
  },
};
</script>
<template>
  <v-card
    class="product-content mx-auto mx-md-0"
    :max-width="$vuetify.breakpoint.smAndDown ? 450 : 500"
    flat
  >
    <div class="colors text-center text-md-left">
      <div class="text-h6 font-weight-bold mb-1">Color</div>
      <v-btn-toggle rounded dense v-model="activeColor">
        <v-btn>
          <v-avatar size="25" color="error"></v-avatar>
        </v-btn>
        <v-btn>
          <v-avatar size="25" color="success"></v-avatar>
        </v-btn>
        <v-btn>
          <v-avatar size="25" color="base"></v-avatar>
        </v-btn>
      </v-btn-toggle>
    </div>
    <div class="sizes text-center text-md-left mt-6">
      <div class="text-h6 font-weight-bold mb-1">Size</div>
      <v-btn-toggle rounded v-model="activeSize" dense>
        <v-btn> sm </v-btn>
        <v-btn> md </v-btn>
        <v-btn> lg </v-btn>
        <v-btn> xl </v-btn>
        <v-btn> xxl </v-btn>
      </v-btn-toggle>
    </div>
    <v-divider class="my-6" />
    <div class="product-actions">
      <div class="buttons">
        <v-scroll-x-transition group hide-on-leave>
          <div
            class="add-to-cart"
            v-if="!C_isProductInCart || C_productQuantity <= 0"
            key="add-to-cart-btn"
          >
            <v-btn
              block
              class="mb-2"
              color="surface darken-1"
              :dark="!isBtnClicked"
              :disabled="isBtnClicked"
              :loading="isBtnClicked"
              x-large
              @click="addToCart"
            >
              <template #loader>
                <span class="text-capitalize">loading...</span>
                <div class="custom-loader ml-3">
                  <v-icon size="20">mdi-cached</v-icon>
                </div>
              </template>
              <span class="text-capitalize">add to cart</span>
              <v-icon right>mdi-cart-outline</v-icon>
            </v-btn>
          </div>
          <div
            class="checkout-btn d-flex justify-center gap-5"
            v-else
            key="checkout-btn"
          >
            <div
              class="quantity-controller fill-width rounded-lg"
              style="height: 52px"
            >
              <div
                class="quantity-wrapper d-flex align-center justify-space-evenly gap-5 fill-height"
              >
                <v-btn
                  fab
                  x-small
                  :disabled="C_productQuantity <= 0 || isBtnClicked"
                  @click="
                    $store.commit('cart/M_decreaseProductQuantity', theProduct)
                  "
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <v-chip label outlined class="px-6" small>
                  <v-scroll-x-transition leave-absolute>
                    <span :key="`C_productQuantity-${C_productQuantity}`">
                      {{ C_productQuantity }}
                    </span>
                  </v-scroll-x-transition>
                </v-chip>

                <v-btn
                  fab
                  x-small
                  @click="
                    $store.commit('cart/M_increaseProductQuantity', theProduct)
                  "
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="checkout-action fill-width">
              <v-btn block color="yellow darken-2" x-large nuxt to="/checkout">
                <span class="text-capitalize">checkout</span>
              </v-btn>
            </div>
          </div>
        </v-scroll-x-transition>
      </div>
      <div class="d-flex align-center mt-2 gap-5 justify-center">
        <div class="wishlist fill-width">
          <v-btn x-large outlined block>
            <span>wishlist</span>
            <v-icon right>mdi-heart-outline</v-icon>
          </v-btn>
        </div>
        <div class="share fill-width">
          <v-btn x-large outlined block>
            <span>share</span>
            <v-icon right>mdi-share-variant-outline</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.quantity-controller {
  border: 1px solid #ddd;
}
</style>
