<template>
  <v-footer color="white">
    <v-card flat class="badge-with-shadow text-center mx-auto py-3">
      <v-card-text class="v-badge-box-shadow">
        <div class="card-badge">
          <v-badge offset-x="10" offset-y="12" left color="base lighten-3">
            .
            <span class="font-weight-black black--text text-h5">Store</span>
          </v-badge>
        </div>
        <div class="socials mt-4">
          <template v-for="(item, itemInd) in socials">
            <span :key="itemInd">
              <v-hover v-slot="{ hover }">
                <v-btn
                  fab
                  small
                  :text="!hover"
                  :class="{ 'ml-1': itemInd !== 0 }"
                  :color="hover ? item.color : ''"
                  depressed
                >
                  <v-icon v-text="item.icon" :color="hover ? 'white' : ''" />
                </v-btn>
              </v-hover>
            </span>
          </template>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    socials: [
      {
        icon: "mdi-whatsapp",
        color: "#25D366",
      },
      {
        icon: "mdi-facebook",
        color: "#1877F2",
      },
      {
        icon: "mdi-linkedin",
        color: "#0072b1",
      },
      {
        icon: "mdi-github",
        color: "#333",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
