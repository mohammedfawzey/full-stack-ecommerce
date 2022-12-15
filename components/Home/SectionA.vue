<template>
  <section id="home-a-search" class="custom-media">
    <v-container class="pa-0 pa-md-3">
      <v-row
        dense
        :style="[$vuetify.breakpoint.smAndDown ? { width: '100%' } : '']"
        :class="{ 'ma-0': $vuetify.breakpoint.smAndDown }"
      >
        <v-col md="4" lg="3" class="hidden-sm-and-down">
          <v-sheet
            color="surface"
            max-width="315"
            width="100%"
            class="py-3 px-5 position-relative rounded-lg rounded-b-0 d-flex align-center justify-space-between"
          >
            <div class="white--text">
              <div class="text-body-1">All Departments</div>
              <div class="text-caption">Total 1059 products</div>
            </div>
          </v-sheet>
          <div class="department-content">
            <!-- 372 -->
            <v-list nav dense max-height="370" outlined>
              <template v-for="(item, itemInd) in items">
                <div v-if="!loaded" :key="itemInd" style="max-height: 45px">
                  <v-skeleton-loader type="list-item" />
                  <v-divider
                    :key="`divider-${itemInd}`"
                    v-if="items.length - 1 !== itemInd"
                  />
                </div>
                <div :key="itemInd" v-else>
                  <!-- v-if="!item.subMenu" -->
                  <BaseListItem
                    v-if="!item.subMenu"
                    has-icon
                    :key="itemInd"
                    :item="item"
                  />
                  <!-- v-else -->
                  <v-menu
                    v-else
                    offset-x
                    :close-on-content-click="false"
                    :key="`menu-${itemInd}`"
                    open-on-hover
                    transition="scroll-x-transition"
                  >
                    <template #activator="{ on, attrs }">
                      <v-list-item v-on="on" v-bind="attrs" class="pointer">
                        <v-list-item-icon class="mr-3">
                          <v-icon size="20">{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ item.title }}
                          </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon>
                          <v-icon size="20">mdi-chevron-right</v-icon>
                        </v-list-item-icon>
                      </v-list-item>
                      <!-- has-icon -->
                    </template>
                    <v-list nav dense expand>
                      <BaseListItem
                        v-for="(subItem, subItemInd) in item.subMenu"
                        :key="subItemInd"
                        :item="subItem"
                      />
                    </v-list>
                  </v-menu>
                  <v-divider
                    :key="`divider-${itemInd}`"
                    v-if="items.length - 1 !== itemInd"
                  />
                </div>
              </template>
            </v-list>
          </div>
        </v-col>
        <v-col md="8" lg="9" class="pa-0 pa-md-1">
          <!-- show before load -->
          <div class="fill-height carousel-placeholder" v-if="!loaded">
            <v-skeleton-loader
              type="image"
              v-bind="{ boilerplate: true }"
              class="fill-height"
              height="100%"
            />
          </div>
          <!-- show after load -->
          <v-carousel
            :show-arrows="false"
            v-else
            :height="$vuetify.breakpoint.mdAndUp ? 438 : '90vh'"
          >
            <v-carousel-item v-for="n in 3" :key="n" eager>
              <!-- src="https://bad.src/not/valid" -->
              <v-img
                :src="require(`@/assets/imgs/products/shoe1-${n}.jpg`)"
                height="100%"
                position="center"
                eager
              >
                <template #placeholder>
                  <v-skeleton-loader type="image, image, image, image" />
                </template>
                <v-sheet
                  class="fill-height pl-5 pl-sm-10 pl-lg-16 d-flex align-center"
                  color="transparent"
                  v-if="loaded"
                >
                  <div class="sheet-body">
                    <div class="img-title">
                      <v-chip color="black" dark label class="px-lg-4"
                        >Shoes Fashion</v-chip
                      >
                    </div>
                    <div
                      style="width: max-content"
                      class="img-header base text-h5 text-sm-h4 px-2 text-lg-h3 my-3 white--text text-capitalize"
                    >
                      come and get it!
                    </div>
                    <div
                      class="text-h5 text-sm-h4 px-2 text-lg-h3 white base--text font-weight-black text-uppercase"
                    >
                      brand new shoes
                    </div>
                    <div class="img-action mt-8">
                      <v-btn
                        color="surface"
                        class="px-6"
                        rounded
                        dark
                        depressed
                      >
                        <span class="text-capitalize">shop now</span>
                      </v-btn>
                    </div>
                  </div>
                </v-sheet>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import departments from "@/data/departments.json";
// import "../../data";
export default {
  data: () => ({
    items: [
      {
        title: "Sports",
        icon: "mdi-lifebuoy",
        supported: false,
      },
      {
        title: "Beauty",
        icon: "mdi-briefcase-check-outline",
        subMenu: [
          "Makeup",
          "skin care",
          "hair care",
          "fragrance",
          "foto & hand care",
          "tools & accessories",
          "shabe & hari removal",
          "personal care",
        ],
        supported: false,
      },
      {
        title: "electronics",
        icon: "mdi-bluetooth",
        subMenu: [
          "Camera",
          "Cell Phones",
          "Computers",
          "GPS & Navigation",
          "HeadPhones",
          "Television",
        ],
        supported: false,
      },
      {
        title: "Women's Fashion",
        icon: "mdi-human-female-female",
        subMenu: [
          "Clothing",
          "Shoes",
          "Jewelry",
          "Watches",
          "Handbages",
          "Accessories",
        ],
        supported: false,
      },
      {
        title: "Men's Fashion",
        icon: "mdi-human-male-male",
        supported: false,
      },
      {
        title: "Health & Household",
        icon: "mdi-heart",
        supported: false,
      },
      {
        title: "Home",
        icon: "mdi-home-outline",
        subMenu: [
          "Bath",
          "Kitchen & Dinning",
          "Furniture",
          "Home Decor",
          "Lighting",
        ],
        supported: false,
      },
      {
        title: "Best Seller",
        icon: "mdi-seal",
        supported: false,
      },
    ],
    status: false,
    // department: true,
    stickySearch: false,
    carouselHeight: 445,
    loaded: false,
    loadTime: 750, //750
  }),
  mounted() {
    this.loaded = true;
    console.log("mounted");
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
.position-relative {
  position: relative;
}
// .department-content {
//   position: absolute;
//   top: 100%;
//   width: 100%;
//   left: 0;
//   border: 1px solid #ddd;
// }
@media (min-width: 960px) {
  .custom-media {
    padding: 0px 64px;
  }
}

.custom-carousel-height {
  @media only screen and (max-width: 599.98px) {
    height: 90vh !important;
  }
  @media only screen and (min-width: 600px) {
    height: 445px !important;
  }
}
</style>
