<template>
  <v-app>
    <v-main>
      <div v-if="$fetchState.pending">fetching....</div>
      <div v-else>
        <v-list>
          <v-list-item link v-for="(item, itemInd) in items" :key="itemInd">
            {{ item.title }}
          </v-list-item>
        </v-list>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [],
  }),
  async fetch() {
    this.items = await fetch("https://api.nuxtjs.dev/planets").then((res) =>
      res.json()
    );
  },
};
</script>

<style lang="scss" scoped></style>
