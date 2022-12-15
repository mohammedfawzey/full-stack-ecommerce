<template>
  <v-container :fluid="$vuetify.breakpoint.xsOnly">
    <v-sheet class="mx-auto" max-width="900">
      <v-slide-group class="pa-2 pa-sm-4" center-active show-arrows>
        <v-slide-item v-for="n in 6" :key="n">
          <v-hover v-slot="{ hover }">
            <v-card
              flat
              class="ma-3 transition-ease-in-out"
              :class="{ 'custom-opacity': !hover }"
            >
              <v-img
                :src="require(`@/assets/imgs/brands/${n}.png`)"
                position="center"
                max-width="120px"
                contain
              />
            </v-card>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.custom-opacity {
  opacity: 0.3;
}
</style>
