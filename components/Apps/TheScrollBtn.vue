<template>
  <v-fab-transition>
    <v-btn
      fixed
      bottom
      right
      fab
      color="base"
      v-show="show"
      dark
      v-scroll="checkScroll"
      @click="$vuetify.goTo(0, { duration: 750 })"
    >
      <BaseArrow />
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  methods: {
    checkScroll() {
      scrollY >= 300 ? (this.show = true) : (this.show = false);
    },
  },
};
</script>
