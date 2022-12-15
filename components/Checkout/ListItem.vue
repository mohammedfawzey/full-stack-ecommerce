<template>
  <v-list-item dense>
    <v-list-item-action class="mr-2">
      <v-img
        :max-width="height + 20"
        :min-width="99"
        :src="item.product.images[0]"
        contain
        :height="height"
      >
        <template #placeholder>
          <BaseSkeletonLoader type="image" />
        </template>
      </v-img>
    </v-list-item-action>
    <v-list-item-content>
      <v-hover v-slot="{ hover }">
        <v-list-item-title
          @click="$router.push({ path: `/shop/${item.product.id}` })"
          :class="{ 'base--text': hover }"
          class="mb-1 font-weight-bold pointer"
          >{{ item.product.title }}</v-list-item-title
        >
      </v-hover>
      <div class="product-price text-caption">
        <div class="font-weight-bold">
          ${{ item.product.price | formatMoney }}
        </div>
      </div>
      <div class="quantity text-caption grey--text">×{{ item.quantity }}</div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({
    height: 80,
  }),
};
</script>

<style lang="scss" scoped></style>
