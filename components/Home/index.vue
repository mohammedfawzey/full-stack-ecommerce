<template>
  <section id="home">
    <!-- <LazyHomeSectionA />
    <HomeSectionB />
    <HomeSectionC class="mb-4" />
    <HomeSectionD class="mb-4" />
    <HomeSectionE class="mb-6" />
    <HomeSectionF /> -->
    <component
      v-for="(component, componentInd) in components"
      :key="componentInd"
      :is="component"
      :class="{
        'my-2': componentInd !== 0 && componentInd !== components.length - 1,
      }"
    />
  </section>
</template>

<script>
export default {
  //TODO ? methods: { // i didn't use it
  //   loading() {
  //     this.$nextTick(() => {
  //       this.$nuxt.$loading.start();
  //       setTimeout(() => this.$nuxt.$loading.finish(), 500);
  //     });
  //   },
  // },
  data: () => ({
    components: [
      "LazyHomeSectionA",
      "HomeSectionB",
      "HomeSectionC",
      "HomeSectionD",
      "HomeSectionE",
      "HomeSectionF",
    ],
  }),
};
</script>

<style lang="scss" scoped>
#home {
  min-height: 1000px;
}
</style>
