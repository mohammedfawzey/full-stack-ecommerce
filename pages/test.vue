<template>
  <v-app>
    <v-main>
      <div class="text-h1">Test Page</div>
      <div class="text-h2">loaded: {{ $fetchState.pending }}</div>
      <button @click="show = true">Refresh</button>
      <button @click="$fetch">refetch</button>
      <LazyTest v-if="show" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [],
    show: false,
  }),
  async fetch() {
    this.items = await fetch("https://api.nuxtjs.dev/planets").then((res) =>
      res.json()
    );
  },
};
</script>

<style lang="scss" scoped></style>
