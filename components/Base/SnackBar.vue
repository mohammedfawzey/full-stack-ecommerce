<script>
export default {
  data: () => ({
    snackbar: true,
    timeout: null,
    delay: 3000, //3000
  }),
  props: ["notification"],
  created() {
    this.timeout = setTimeout(() => {
      this.$store.commit("cart/M_removeNotification", this.notification);
    }, this.delay);
  },
  methods: {
    removeNotification() {
      this.snackbar = false;
      this.$store.commit("cart/M_removeNotification", this.notification);
      clearTimeout(this.timeout);
    },
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
};
</script>
<template>
  <v-snackbar v-model="snackbar" app color="success" :timeout="3000" top right>
    <!-- transition="slide-x-reverse-transition" -->
    <span class="text-capitalize">{{ notification.text }}</span>
    <template #action="{ attrs }">
      <v-btn icon small @click="removeNotification" v-bind="attrs"
        ><v-icon size="20">mdi-close</v-icon></v-btn
      >
    </template>
  </v-snackbar>
</template>
