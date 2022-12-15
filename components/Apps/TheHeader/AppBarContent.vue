<template>
  <v-container class="d-flex align-center container-sm--fluid px-0 px-sm-3">
    <!-- TODO : app-bar(px-md-16)  px-0-->
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="showNavigation" />
    <!-- title -->
    <v-spacer class="hidden-xs-only hidden-md-and-up" />
    <v-toolbar-title
      class="font-weight-black pointer pl-1"
      @click="$router.push({ path: '/' })"
    >
      <div class="pt-2 pl-1">
        <v-badge
          left
          top
          offset-x="20"
          class="badge_shadow"
          offset-y="15"
          overlap
          color="#bbabf0"
        >
          <span
            class="pa-3 font-weight-black text-h6 text-sm-h4 text-md-h5 logo"
          >
            .<span class="the-title">Store</span>
          </span>
        </v-badge>
      </div>
    </v-toolbar-title>
    <v-spacer class="hidden-sm-and-down" />
    <!-- links -->
    <v-lazy transition="slide-x-transition" v-if="$vuetify.breakpoint.mdAndUp">
      <!-- class="hidden-sm-and-down" -->
      <div class="links">
        <span
          v-for="(link, linkInd) in links"
          :key="linkInd"
          :class="[{ 'ml-2': linkInd !== 0 }]"
        >
          <!-- TODO => change active button {color,properties} -->
          <AppsTheHeaderAppBarMenu v-if="link.subMenu" :link="link" />
          <v-btn
            small
            depressed
            text
            v-else-if="!link.isNew"
            nuxt
            :to="link.route"
            class="transparent"
            @click="activeLink = linkInd"
            :color="linkInd == activeLink ? 'base darken-4' : 'grey darken-1'"
          >
            <span class="text-capitalize text-body-2">{{ link.title }}</span>
          </v-btn>
          <v-badge v-else label="s" color="surface">
            <template #badge>
              <span>new</span>
            </template>
            <v-btn small depressed text disabled>
              <span class="text-capitalize text-body-2">{{ link.title }}</span>
            </v-btn>
          </v-badge>
        </span>
      </div>
    </v-lazy>
    <v-spacer />
    <!-- TODO reveal to shop page -->
    <!-- search -->
    <v-btn class="mr-2" icon @click="redirectToShopPage">
      <!-- class="hidden-sm-and-down" -->
      <v-icon size="20">mdi-magnify</v-icon>
    </v-btn>
    <!-- fav  -->
    <div class="icon-btn" v-if="!loaded">
      <BaseSkeletonLoader type="avatar" />
    </div>
    <LazyAppsTheHeaderTooltipAccount
      v-else-if="$vuetify.breakpoint.smAndUp && loaded"
    />
    <v-btn
      v-else
      nuxt
      :to="{ name: 'auth', query: { auth: 'login' } }"
      icon
      class="hidden-sm-and-up"
    >
      <v-icon size="20">mdi-account-outline</v-icon>
    </v-btn>
    <v-divider vertical class="mx-1 mr-sm-1" />
    <!-- cart  -->
    <div class="icon-btn" v-if="!loaded" icon>
      <BaseSkeletonLoader type="avatar" />
    </div>
    <LazyAppsTheHeaderTooltipCart
      v-else
      @showNavigationCart="showNavigationCart"
    />
    <div class="ml-5 d-none d-lg-flex align-left flex-column justify-center">
      <div class="text-body-2 font-weight-medium">Total</div>
      <div class="main--text font-weight-bold">$0</div>
    </div>
  </v-container>
</template>

<script>
// media md-and-up
import links from "@/data/links.json";
export default {
  data: () => ({
    links,
    activeLink: 0,
    search: false,
    dialog: true,
    loaded: false,
  }),
  methods: {
    showNavigationCart() {
      this.$emit("showNavigationCart", { clicked: true });
    },
    showNavigation() {
      this.$emit("showNavigation", { clicked: true });
    },
    redirectToShopPage() {
      // check in the same router and route has search quyer
      //
      const query = { ...this.$route.query, search_dialog: true };
      // check if route has search query
      // "search" in this.$route.query
      //   ? (query["search"] = this.$route.query.search)
      //   : "";
      if (this.$route.name != "shop") {
        // in other route
        this.$router.push({ name: "shop", query });
      } else {
        // in shop route
        this.$router.push({ query });
      }
    },
  },
  mounted() {
    this.loaded = true;
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
.logo {
  font-family: "Poppins", sans-serif !important;
  * {
    font-family: "Poppins", sans-serif !important;
  }
}
.fill-width {
  width: 100%;
}
@media only screen and (max-width: 959.98px) {
  .container-sm--fluid {
    max-width: 100% !important;
  }
}
.icon-btn {
  max-width: 48px;
  max-height: 48px;
}
</style>
