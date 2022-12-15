<template>
  <v-app-bar
    color="white"
    app
    height="80"
    class="v-box-shadow"
    clipped-right
    elevate-on-scroll
  >
    <!-- <component
      :is="currentComponent"
      type="text@1, avatar@2"
      app-bar
      @showNavigation="showNavigation"
      @showNavigationCart="showNavigationCart"
      @showNavigationFavourite="showNavigationFavourite"
    /> -->
    <AppsTheHeaderAppBarContent
      @showNavigation="showNavigation"
      @showNavigationCart="showNavigationCart"
      @showNavigationFavourite="showNavigationFavourite"
    />
  </v-app-bar>
</template>

<script>
// media md-and-up
export default {
  data: () => ({
    //TODO delay: 850,
    delay: 0,
    currentComponent: "BaseSkeletonLoader",
    isFetched: false,
  }),
  methods: {
    showNavigationFavourite() {
      this.$emit("showNavigationFavourite", { clicked: true });
    },
    showNavigationCart() {
      this.$emit("showNavigationCart", { clicked: true });
    },
    showNavigation() {
      this.$emit("showNavigation", { clicked: true });
    },
    AppBarLoadingState() {
      this.currentComponent = "BaseSkeletonLoader";
      //TODO setTimeout(() => {
      this.currentComponent = "AppsTheHeaderAppBarContent";
      // }, this.delay);
    },
  },
  // async fetch() {
  //   this.AppBarLoadingState();
  // },
  mounted() {
    this.AppBarLoadingState();
  },
};
</script>

<style lang="scss" scoped>
.logo {
  font-family: "Poppins", sans-serif !important;
  * {
    font-family: "Poppins", sans-serif !important;
  }
}
.fill-width {
  width: 100%;
}
</style>
