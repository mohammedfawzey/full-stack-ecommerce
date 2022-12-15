<template>
  <v-dialog
    v-model="loading"
    width="200"
    hide-overlay
    content-class="elevation-0"
    transition=""
  >
    <v-card
      min-height="50"
      class="d-flex align-center justify-center"
      flat
      color="transparent"
    >
      <!-- <div class="loader" id="loader-3"></div> -->
      <v-progress-circular width="2" indeterminate />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    loaderDelay: 750,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>
