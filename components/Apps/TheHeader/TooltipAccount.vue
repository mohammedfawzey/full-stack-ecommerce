<template>
  <v-menu offset-y transition="slide-y-transition">
    <template #activator="{ on, attrs }">
      <v-btn icon v-on="on" v-bind="attrs">
        <!-- TODO if user logged in -->
        <!-- <v-badge dot overlap color="success"> -->
        <v-icon size="20">mdi-account-outline</v-icon>
        <!-- </v-badge> -->
      </v-btn>
    </template>
    <v-list nav dense>
      <v-list-item>
        <v-btn
          block
          color="base"
          dark
          nuxt
          :to="{ path: '/auth', query: { auth: 'login' } }"
        >
          <span class="text-capitalize">sign in</span>
          <v-icon right>mdi-login</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider class="my-2" />
      <BaseListItem
        v-for="(item, itemInd) in items"
        :key="itemInd"
        :item="item"
        dense
        has-icon
      />
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "my account",
        icon: "mdi-account-outline",
      },
      {
        title: "orders",
        icon: "mdi-order-bool-ascending",
      },
      {
        title: "inbox",
        icon: "mdi-email-outline",
      },
      {
        title: "saved items",
        icon: "mdi-heart-outline",
      },
    ],
  }),
  computed: {
    savedLength() {
      return this.$store.state.saved.S_favs.length;
    },
  },
};
</script>
