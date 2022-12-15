<template>
  <v-list-item
    :active-class="checkbox ? '' : 'base'"
    :color="checkbox ? '' : 'white'"
    :link="link && !activator"
    :to="link && !isMenu ? item.route : ''"
    :class="[{ 'pl-0': activator }, { 'v-list-item-small-height': dense }]"
  >
    <template v-slot:default="{ active }">
      <v-list-item-action
        v-if="checkbox"
        class="mr-3"
        :class="{ 'my-1': dense }"
      >
        <v-checkbox :input-value="active" color="base" dense></v-checkbox>
      </v-list-item-action>
      <v-list-item-icon v-if="hasIcon" class="mr-3">
        <v-icon size="20">{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content
        class="text-capitalize"
        :class="{ 'text-uppercase': checkbox }"
      >
        <v-list-item-title
          v-text="title"
          v-if="!subTitle"
          :class="[{ 'font-weight-medium': bold }, ...classes]"
        />
        <v-list-item-subtitle
          v-else
          v-text="title"
          :class="[{ 'font-weight-medium': bold }, ...classes]"
        />
      </v-list-item-content>
      <v-list-item-icon v-if="isMenu">
        <v-icon size="20">mdi-chevron-right</v-icon>
      </v-list-item-icon>
    </template>
  </v-list-item>
</template>

<script>
export default {
  computed: {
    title() {
      return this.item["title"] ? this.item["title"] : this.item;
    },
  },
  props: {
    item: {
      required: true,
    },
    classes: {
      default() {
        return [""];
      },
    },
    hasIcon: Boolean,
    link: {
      default: true,
      type: Boolean,
    },
    bold: {
      default: true,
      type: Boolean,
    },
    subTitle: Boolean,
    activator: Boolean,
    isMenu: Boolean,
    dense: Boolean,
    checkbox: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
