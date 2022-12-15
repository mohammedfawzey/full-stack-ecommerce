<template>
  <!-- dense -->
  <section id="search-bar">
    <v-autocomplete
      v-model="model"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      dense
      item-text="name"
      item-value="id"
      cache-items
      class="mr-0 rounded-r-0 v-box-shadow"
      hide-no-data
      placeholder="Search products, categories"
      hide-details
      outlined
      color="white"
      solo
    >
      <!-- solo-inverted -->
      <template v-slot:item="{ item }">
        <v-list-item-avatar
          color="indigo"
          class="text-h5 font-weight-light white--text"
        >
          {{ item.name.charAt(0) }}
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-bitcoin</v-icon>
        </v-list-item-action>
      </template>
    </v-autocomplete>
  </section>
</template>

<script>
// import debounce from "lodash"
export default {
  data: () => ({
    model: "",
    loading: false,
    items: [],
    search: "",
    test: "",
  }),
  watch: {
    search(val) {
      if (this.items.length > 0) return;
      this.loading = true;
      fetch("https://api.coingecko.com/api/v3/coins/list")
        .then((response) => response.clone().json())
        .then((result) => {
          this.items = result;
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.loading = false;
        });
    },
  },
  props: {
    sectionA: Boolean,
  },
};
</script>

<style lang="scss" scoped>
#search-bar {
  // width: 100%;
  width: 430px;
}
.custom-width {
  // max-width: 310px;
  max-width: 450px;
}
</style>
