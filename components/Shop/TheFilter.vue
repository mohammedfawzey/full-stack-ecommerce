<template>
  <section
    id="shop-the-filter"
    :class="[mobile ? 'fill-height d-flex flex-column' : 'sticky-filter']"
    style="background: #f5f5f5"
  >
    <div
      class="pa-3 close-filter white d-flex align-center gap-5 mb-3"
      v-if="mobile"
    >
      <v-btn fab small text depressed @click="$emit('closeShopFilter')">
        <v-icon size="20">mdi-arrow-left</v-icon>
      </v-btn>
      <div class="text-h6 font-weight-medium">Filter</div>
    </div>
    <v-card class="pa-4 v-box-shadow" :color="mobile ? '' : ''">
      <!-- :class="{ 'fill-height d-flex flex-column': mobile }" -->
      <div class="search-box white">
        <ShopTheSearchBar :searching="searching" />
      </div>
      <div class="category-box">
        <v-list nav dense class="small-list-item-loader">
          <div class="text-body-2 mb-2 font-weight-bold">Categoires</div>
          <v-sheet
            :max-height="C_maxScrollHeight"
            class="overflow-y-auto v-scroll-bar transparent"
          >
            <template v-for="(item, itemInd) in categories">
              <div :key="itemInd" v-if="loaded">
                <BaseListItem
                  :item="item"
                  dense
                  @click.native="filterByCategory(item)"
                />
              </div>
              <BaseSkeletonLoader :key="itemInd" type="list-item" v-else />
            </template>
          </v-sheet>
        </v-list>
      </div>
      <v-divider class="my-1" />
      <div class="size-box" v-if="false">
        <v-list nav dense class="small-list-item-loader">
          <div class="text-body-2 mb-2 font-weight-bold">Sizes</div>
          <v-sheet
            :max-height="C_maxScrollHeight"
            class="overflow-y-auto v-scroll-bar transparent"
          >
            <v-list-item-group active-class="" v-model="activeSize">
              <template v-for="(item, itemInd) in sizes">
                <div :key="itemInd" v-if="loaded">
                  <BaseListItem :item="item" dense checkbox />
                </div>
                <BaseSkeletonLoader :key="itemInd" type="list-item" v-else />
              </template>
            </v-list-item-group>
          </v-sheet>
        </v-list>
      </div>
      <v-divider class="my-1" />
      <div class="price-box">
        <div class="text-body-2 font-weight-bold mb-2">Prices</div>
        <div class="price-slider">
          <v-range-slider
            v-model="range"
            :max="max"
            :min="min"
            color="base"
            dense
            hide-details
            track-color="base lighten-4"
          >
          </v-range-slider>
        </div>
        <div class="text-field-price d-flex align-center justify-space-between">
          <v-text-field
            dense
            hide-details
            type="number"
            outlined
            style="width: 100px; max-width: 100px"
            :value="range[0]"
            @change="$set(range, 0, $event)"
            color="base"
          />
          <v-text-field
            dense
            hide-details
            type="number"
            outlined
            style="width: 100px; max-width: 100px"
            :value="range[1]"
            @change="$set(range, 1, $event)"
            color="base"
          />
        </div>
      </div>
    </v-card>
    <div class="fill-width mt-auto gap-5 d-flex" :class="{ 'pt-4': !mobile }">
      <div style="width: 50%">
        <v-btn
          block
          color="surface darken-2"
          @click="resetFilter"
          class="rounded-0"
          outlined
          dark
        >
          <span class="text-capitalize">reset</span>
          <v-icon right>mdi-restore</v-icon>
        </v-btn>
      </div>
      <div class="fill-width">
        <v-btn
          block
          color="base darken-2"
          @click="filterByPrice"
          class="rounded-0"
          :dark="mutations >= 1"
          :disabled="mutations <= 0"
        >
          <!-- {{ mutations }} -->
          <span class="text-capitalize">Apply</span>
          <!-- {{ mutations }} -->
          <v-icon right>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <div class="d-none" v-mutate="onMutate">
        {{ range }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    min: 0,
    max: 2000,
    range: [0, 2000],
    maxScrollHeight: 120,
    categories: ["Electronics", "Furniture", "others", "shoes", "clothes"],
    // "bags",
    // "stylish",
    //shoes/Furniture//Others//Electronics//clothes
    sizes: ["s", "m", "lg", "xl", "xxl"],
    activeSize: 1,
    loaded: false,
    delay: 250,
    mutations: 0,
  }),
  mounted() {
    // this.mutations = 0;
    this.getFilterValuesFromRouter();
    setTimeout(() => {
      this.loaded = true;
    }, this.delay);
  },
  props: {
    mobile: Boolean,
    searching: Function,
  },
  computed: {
    C_maxScrollHeight() {
      return this.mobile ? 130 : 120;
    },
  },
  methods: {
    getFilterValuesFromRouter() {
      this.range = [this.$route.query.min || 0, this.$route.query.max || 2000];
      this.mutations = 0;
    },
    onMutate() {
      this.mutations++;
    },
    filterByCategory(category) {
      const c = category.toLowerCase();
      const query = { ...this.$route.query, category: c, search_dialog: false };
      this.$router.push({ query });
    },
    filterByPrice() {
      this.mutations = 0;
      const query = {
        ...this.$route.query,
        search_dialog: false,
        min: this.range[0],
        max: this.range[1],
      };
      this.$router.push({ query });
    },
    resetFilter() {
      const query = { search_dialog: false };
      this.$router.push({ query });
      this.range = [0, 2000];
      this.mutations = 0;
      console.log("this.mutations", this.mutations);
    },
  },
};
</script>

<style lang="scss" scoped>
.sticky-filter {
  position: sticky;
  top: 92px;
}
</style>
