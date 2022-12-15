<template>
  <v-row
    v-if="circle"
    align="center"
    justify="center"
    class="fill-height fill-width ma-auto"
  >
    <v-progress-circular
      :width="circleWidth"
      color="grey darken-1"
      :size="xSmall ? 20 : 30"
      indeterminate
    />
  </v-row>
  <v-skeleton-loader
    v-else
    width="100%"
    height="100%"
    :type="type"
    :class="[
      {
        'custom-header px-sm-16': appBar,
      },
    ]"
  />

  <!-- { 'px-16 px-xs-only-16': appBar && !$vuetify.breakpoint.xsOnly }, -->
</template>

<script>
export default {
  props: {
    type: {
      default: "list-item-two-line",
    },
    fixed: Boolean,
    appBar: Boolean,
    circle: Boolean,
    xSmall: Boolean,
    circleWidth: {
      default: 2,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
.position-fixed {
  position: fixed !important;
  width: 100%;
  z-index: 5;
}
.custom-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
@media #{map-get($display-breakpoints,"sm-and-up")} {
  .custom-media {
    padding: 0px 64px;
  }
}
</style>
