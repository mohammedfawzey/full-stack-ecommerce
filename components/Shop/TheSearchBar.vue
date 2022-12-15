<template>
  <section id="shop-search-bar" class="mb-1" v-click-outside="clearSearch">
    <div class="d-flex align-center">
      <v-text-field
        clearable
        prepend-inner-icon="mdi-magnify"
        hide-details
        dense
        color="base"
        placeholder="Search Products..."
        outlined
        @input="debounceSearch"
        v-model="search"
      ></v-text-field>
    </div>
    <v-card class="pa-2 list-result rounded-t-0" v-if="search">
      <v-list dense nav>
        <v-sheet class="overflow-y-auto v-scroll-bar" max-height="150">
          <v-list-item
            dense
            link
            style="min-height: 32px"
            @click.native="check(dSearch)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ dSearch }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-scroll-x-transition group hide-on-leave>
            <BaseListItem
              v-for="(item, itemInd) in items.slice(0, 12)"
              :key="itemInd"
              :item="item"
              @click.native="check(item.title)"
              dense
            />
          </v-scroll-x-transition>
        </v-sheet>
      </v-list>
    </v-card>
    <!-- </div> -->
  </section>
</template>

<script>
import productData from "@/content/products/products.json";
export default {
  data: () => ({
    search: "",
    debounceTimeout: null,
    items: [],
    dSearch: "",
  }),
  props: {
    searching: Function,
  },
  methods: {
    searchingBar() {
      if (this.search) {
        this.items = productData.filter((el) => {
          return (
            el.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          );
        });
      } else {
        this.items = productData;
      }
    },
    check(text) {
      // scroll
      this.search = text;
      const { search, ...query } = this.$route.query;
      console.log("queryOptions", query);
      // const query = { search: text, ...this.$route.query };
      // this.$vuetify.breakpoint.smAndDown
      //   ? (query["search_dialog"] = false)
      //   : "";
      this.$router.push({
        query: { ...query, search: text, search_dialog: false },
      });
    },
    debounceSearch: function () {
      if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.searchingBar();
        this.dSearch = this.search;
      }, 500); // delay for half second
    },
    clearSearch() {
      this.search = "";
    },
  },
};
</script>

<style lang="scss" scoped>
#shop-search-bar {
  position: relative;
  .list-result {
    position: absolute;
    width: 100%;
    z-index: 1;
  }
}
</style>
