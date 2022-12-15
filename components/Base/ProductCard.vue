<template>
  <!-- :max-width="375" -->
  <!-- outlined ma-3-->
  <!-- TODO click router to proudct details -->
  <v-card
    class="product-card"
    flat
    :outlined="offer"
    :max-width="row ? '' : offer ? 300 : 250"
    :link="slider ? true : false"
    :class="[
      { 'ma-2': !row && !offer },
      { 'my-2': !offer },
      { 'mx-auto pa-3 pb-2 fill-height d-flex flex-column': offer },
    ]"
  >
    <!-- { 'mx-auto': search }, -->
    <v-card-text class="offer pt-0 px-sm-0 px-md-2 pb-2 mb-1" v-if="offer">
      <div class="offer--text text-h6 font-weight-bold black--text text-center">
        OFFER ENDS AT
      </div>
      <div class="offer-date text-center mt-1 gap-5">
        <v-chip
          :class="{ 'ml-1': offerDateItemInd !== 0 }"
          label
          v-for="(offerDateItem, offerDateItemInd) in offerDate"
          :key="offerDateItemInd"
        >
          <span class="offer-date-time">
            {{ offerDateItem }}
          </span>
        </v-chip>
      </div>
    </v-card-text>
    <!-- image -->
    <v-row
      dense
      @click="slider ? slider.toggle : ''"
      :class="{ 'fill-height': offer }"
    >
      <!-- TODO change pt-0 for trending -->
      <!-- TODO :cols="12" -->
      <v-col
        :cols="row ? 6 : 12"
        :md="row ? 6 : ''"
        class="pt-0"
        :class="{ 'd-flex align-center': offer }"
      >
        <v-hover v-slot="{ hover }">
          <v-img
            :src="item.images[0]"
            :width="row ? 140 : 250"
            class="transition-fast-in-fast-out"
            :class="{ 'not-active-image': hover }"
            :height="C_imgHeight"
          >
            <template #placeholder>
              <div class="fill-height image-placeholder">
                <BaseSkeletonLoader type="image" />
              </div>
            </template>
            <v-scroll-x-transition>
              <!-- TODO v-if="actions" -->
              <v-card
                flat
                class="transparent transition-fast-in-fast-out fill-height d-flex justify-end"
                :class="{ 'linear-card': hover && !$vuetify.breakpoint.xsOnly }"
                width="100%"
                link
                @click="redirectToTheProduct"
              >
                <v-card-text
                  class="d-none hidden-xs-only d-sm-flex pa-0 pt-2 pr-2 flex-column align-end gap-5 max-h max-w"
                  @click.stop
                >
                  <v-slide-y-transition>
                    <v-btn
                      fab
                      x-small
                      dark
                      v-if="hover"
                      color="surface darken-1"
                    >
                      <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                  </v-slide-y-transition>
                  <v-slide-x-reverse-transition>
                    <v-btn
                      fab
                      x-small
                      dark
                      v-if="hover"
                      outlined
                      @click="redirectToTheProduct"
                    >
                      <v-icon>mdi-eye-outline</v-icon>
                    </v-btn>
                  </v-slide-x-reverse-transition>
                  <v-slide-y-reverse-transition>
                    <v-btn
                      fab
                      x-small
                      color="base"
                      dark
                      :disabled="C_isProductInCart || isBtnClicked"
                      :loading="isBtnClicked"
                      v-if="hover"
                      @click="addToCart"
                    >
                      <v-icon>mdi-cart-outline</v-icon>
                    </v-btn>
                  </v-slide-y-reverse-transition>
                </v-card-text>
              </v-card>
            </v-scroll-x-transition>

            <!--TODO <v-card
              class="dicount fill-height d-flex align-end text-right transparent"
              v-if="false"
            >
              <v-card-text class="pa-2">
                <v-avatar color="grey darken-1" size="30" dark>
                  <span class="text-small white--text">
                    {{ discount }}
                  </span>
                </v-avatar>
              </v-card-text>
            </v-card> -->
          </v-img>
        </v-hover>
      </v-col>
      <v-col
        :cols="row ? 6 : 12"
        :md="row ? 6 : ''"
        :style="[offer ? { height: 'max-content' } : {}]"
      >
        <!-- product-content -->
        <!-- :class="{ 'fill-height d-flex flex-column justify-space-between': row }" -->
        <div class="product-content">
          <v-hover v-slot="{ hover }">
            <div
              @click="redirectToTheProduct"
              class="product-title pointer"
              :class="[
                { 'mt-2': offer },
                { 'base--text text--lighten-1': hover },
              ]"
            >
              <!-- text-body-2 -->
              <v-list-item-title
                class="text-caption font-weight-bold"
                v-if="!row && !offer"
                >{{ item.title }}</v-list-item-title
              >
              <div class="text-body-2 font-weight-bold" v-else>
                {{ item.title }}
              </div>
            </div>
          </v-hover>
          <div class="product-rating d-flex align-center gap-5">
            <v-rating
              dense
              x-small
              background-color="grey"
              :value="3.5"
              readonly
              half-increments
              color="yellow darken-3"
            ></v-rating>
            <v-chip class="rating-number" label x-small outlined> 3.5 </v-chip>
          </div>
          <div class="product-price d-flex align-center gap-5">
            <div class="main-price surface--text font-weight-bold text-body-2">
              ${{ item.price | formatMoney }}
            </div>
            <del class="text-caption grey--text"
              >${{ 20000 | formatMoney }}</del
            >
          </div>
          <div class="product-track-amount mt-2" v-if="offer">
            <div
              class="track-title text-caption d-flex align-center justify-space-between"
            >
              <span
                >in stock <b>{{ stock }}</b></span
              >
              <span
                >sold <b>{{ sold }}</b></span
              >
            </div>
            <v-progress-linear
              :value="productInStock"
              color="base"
            ></v-progress-linear>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    offerDate: [0, 0, 0, 0],
    offerTime: 1000 * 60 * 60 * 24 * 23, // 23 day
    theDate: 1987200000, // get from db
    stock: 107, //inventory
    sold: 22,
    isBtnClicked: false,
    delay: 250, //TODO 750
  }),
  props: {
    item: {
      required: true,
    },
    offer: {
      default: false,
      type: Boolean,
    },
    actions: {
      type: Boolean,
      default: true,
    },
    row: Boolean,
    width: {
      default: "",
    },
    discount: {
      default: "",
    },
    slider: Object,
    search: Boolean,
  },
  mounted() {
    if (!this.offer) return;
    this.getOfferDate();
  },
  methods: {
    getOfferDate() {
      const dateNow = new Date();
      const dateOffer = new Date(dateNow.getTime() + this.offerTime);
      setInterval(() => {
        const dateAfterOffer = new Date(dateOffer - new Date());
        const days = dateAfterOffer.getDate();
        const hours = dateAfterOffer.getHours();
        const minutes = dateAfterOffer.getMinutes();
        const seconds = dateAfterOffer.getSeconds();
        this.offerDate = [days, hours, minutes, seconds];
      }, 1000);
    },
    redirectToTheProduct() {
      // this.$router.push({ path: `/shop/${itemId}` });
      this.$router.push({ path: `/shop/${this.item.id}` });
    },
    addToCart() {
      this.isBtnClicked = true;
      setTimeout(() => {
        this.$store.dispatch("cart/A_addToCart", this.item);
        this.isBtnClicked = false;
      }, this.delay);
    },
  },
  computed: {
    productInStock() {
      return Math.round(this.stock - this.sold);
    },
    C_imgHeight() {
      return this.row
        ? 155
        : this.offer && this.$vuetify.breakpoint.lgAndUp
        ? 290
        : this.$vuetify.breakpoint.mdOnly && this.offer
        ? 430
        : this.$vuetify.breakpoint.smOnly && this.offer
        ? 270
        : this.$vuetify.breakpoint.xsOnly && this.offer
        ? 270
        : 160;
    },
    C_isProductInCart() {
      return this.$store.getters["cart/G_isProductInCart"](this.item)
        ? true
        : false;
    },
  },
};
</script>

<style lang="scss" scoped>
$span-width: 22px;
.offer-date-time {
  width: $span-width;
  height: $span-width;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gap-5 {
  gap: 5px;
}
.not-active-image {
  opacity: 0.9;
}
// .active_image {
//   opacity: 0.9;
// }
</style>
