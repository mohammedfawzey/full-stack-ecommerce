<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    fixed
    width="255"
    class="quicksand-font"
    left
    disable-resize-watcher
    @input="checkNavigationStatus"
  >
    <!-- disable-route-watcher -->
    <!-- title-close_btn -->
    <v-sheet
      color="base"
      height="80px"
      class="rounded-br-xl-custom px-6 py-1 d-flex align-center justify-space-between"
      dark
    >
      <div class="logo">
        <v-badge left offset-x="10" offset-y="12" color="base lighten-4">
          <span class="text-h6 font-weight-black">.Shop</span>
        </v-badge>
      </div>
      <div class="drawer-action">
        <v-btn icon @click="drawer = false">
          <v-icon size="20">mdi-close</v-icon>
        </v-btn>
      </div>
    </v-sheet>
    <!-- links -->
    <v-list nav dense>
      <template v-for="(link, linkInd) in links">
        <BaseListItem
          :key="linkInd"
          :item="link"
          has-icon
          v-if="!link.subMenu"
        />
        <v-list-group v-else :key="linkInd" color="base">
          <template #activator>
            <BaseListItem :item="link" :link="false" has-icon activator />
          </template>
          <v-list nav dense>
            <BaseListItem
              :bold="false"
              v-for="(subLink, subLinkInd) in link.subMenu"
              :key="subLinkInd"
              :item="subLink"
            />
          </v-list>
        </v-list-group>
      </template>
    </v-list>

    <v-divider class="my-3" />
    <!-- All_departments -->
    <v-card-text class="text-center">
      <v-chip label class="px-8 py-2">
        <span>All Departments</span>
      </v-chip>
    </v-card-text>
    <v-list nav dense>
      <template v-for="(item, itemInd) in departments">
        <BaseListItem
          :key="itemInd"
          has-icon
          :item="item"
          v-if="!item.subMenu"
        />
        <v-list-group :key="itemInd" v-else color="base">
          <template #activator>
            <BaseListItem :item="item" has-icon activator />
          </template>
          <v-list nav dense>
            <v-sheet max-height="225" class="overflow-y-auto v-scroll-bar">
              <BaseListItem
                v-for="(subItem, subItemInd) in item.subMenu"
                :key="subItemInd"
                :item="subItem"
              />
            </v-sheet>
          </v-list>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import links from "@/data/links.json";
import departments from "@/data/departments.json";
export default {
  setup() {},
  data: () => ({
    activeRoute: 0,
    links,
    departments,
    drawer: false,
  }),
  props: ["navigation", "navigationStatus"],
  methods: {
    checkNavigationStatus() {
      this.navigationStatus(this.drawer);
    },
  },
  watch: {
    navigation(value) {
      this.drawer = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.rounded-br-xl-custom {
  border-bottom-right-radius: 65px;
}
.logo {
  * {
    font-family: "Poppins", sans-serif !important;
  }
}
.all-white {
  * {
    color: white !important;
  }
}
</style>
