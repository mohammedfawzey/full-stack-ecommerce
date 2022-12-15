<template>
  <v-btn
    fab
    small
    :color="search ? 'base darken-1' : 'base'"
    dark
    :fixed="fixed"
    :bottom="fixed"
    :right="fixed"
  >
    <v-slide-x-transition group leave-absolute>
      <v-icon key="search-magnify" size="20" v-if="!search">mdi-magnify</v-icon>
      <v-icon size="20" key="search-close-icon" v-else>mdi-close</v-icon>
    </v-slide-x-transition>
  </v-btn>
</template>

<script>
export default {
  props: {
    fixed: Boolean,
    search: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
