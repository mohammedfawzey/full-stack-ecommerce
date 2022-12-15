<template>
  <v-menu
    open-on-click
    offset-y
    min-width="100%"
    absolute
    transition="slide-y-reverse-transition"
    :position-y="80"
    :close-delay="1000"
    :close-on-content-click="false"
  >
    <template #activator="{ on, attrs }">
      <v-btn small depressed v-on="on" v-bind="attrs" text class="transparent">
        <span class="text-capitalize text-body-2">{{ link.title }}</span>
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-card class="rounded-0 pt-8" min-height="300" color="">
      <v-container>
        <v-row dense>
          <v-col
            cols="2"
            v-for="(item, itemInd) in link.subMenu"
            :key="itemInd"
          >
            <v-list nav dense color="transparent">
              <div
                class="text-caption font-weight-bold text-capitalize text--darken-2 mb-3"
              >
                {{ item.title }}
              </div>
              <!-- class="text-capitalize" -->
              <BaseListItem
                :classes="['text-capitalize']"
                v-for="(subItem, subItemInd) in item.subs"
                :key="subItemInd"
                dense
                sub-title
                :item="subItem"
                :is-subtitle="true"
              />
            </v-list>
          </v-col>
          <v-col cols="4">
            <!-- src="https://bad.src/not/valid" -->
            <!-- lazy-src="https://i.picsum.photos/id/20/500/300.jpg?hmac=bkIR6-136Q_P9IU1bjU0JeFQlSBRG-FLvaynW1V0pFc" -->
            <v-hover v-slot="{ hover }">
              <v-img
                :src="require('@/assets/imgs/products/electronic2.jpg')"
                max-height="300"
                position="center center"
                min-height="295px"
                contain
                min-width="200px"
              >
                <template #placeholder>
                  <!-- <v-skeleton-loader /> -->
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular width="2" indeterminate />
                  </v-row>
                </template>
                <v-scroll-x-transition>
                  <v-sheet
                    v-if="hover"
                    class="fill-height custom-bg transparent d-flex align-end justify-center"
                    dark
                  >
                    <v-card-text
                      class="d-flex px-0 pt-0 align-center flex-column justify-end"
                    >
                      <div
                        class="text-h6 font-weight-black white--text px-2 mb-1"
                      >
                        Most Wanted!
                      </div>
                      <v-btn
                        color="surface"
                        depressed
                        dark
                        rounded
                        class="px-6"
                      >
                        <span class="text-capitalize">order now</span>
                      </v-btn>
                    </v-card-text>
                  </v-sheet>
                </v-scroll-x-transition>
              </v-img>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style lang="scss" scoped>
.custom-bg {
  background-image: linear-gradient(to top, #463f5b, transparent);
}
</style>
