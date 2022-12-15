<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    fixed
    width="300"
    right
    @input="checkNavigationStatus"
    clipped
    disable-resize-watcher
    disable-route-watcher
  >
    <v-sheet
      height="80px"
      class="px-4 py-1 d-flex align-center justify-space-between"
    >
      <div class="navigation-text">
        <span class="text-h6 font-weight-medium">Saved Products</span>
      </div>
      <div class="navigation-close">
        <v-btn icon @click="drawer = false">
          <v-icon size="20">mdi-close</v-icon>
        </v-btn>
      </div>
    </v-sheet>
    <v-divider />
    <div class="favourite-empty" v-if="!savedEmpty">there is content here</div>
    <div class="favourite-content" v-else>
      <v-img :src="require('@/assets/imgs/emptycart.svg')" contain />
    </div>
    <!-- component is -->
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  methods: {
    checkNavigationStatus() {
      // watch any drawer action{open|close}
      this.NavigationFavouriteStatus(this.drawer);
    },
  },
  props: ["navigationFavourite", "NavigationFavouriteStatus"],
  watch: {
    navigationFavourite(value) {
      this.drawer = value;
    },
  },
  computed: {
    savedEmpty() {
      return this.$store["state"].saved.S_favs.length <= 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
