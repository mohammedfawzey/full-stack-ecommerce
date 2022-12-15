<template>
  <div class="arrow-width" :class="{ left, right,bottom }">
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      class="style-scope yt-icon"
      style="pointer-events: none; display: block; width: 100%; height: 100%"
    >
      <g class="style-scope yt-icon">
        <polygon
          points="19.35,11.5 11.5,3.65 3.65,11.5 4.35,12.21 11,5.56 11,20 12,20 12,5.56 18.65,12.21 "
          class="style-scope yt-icon"
        ></polygon>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    left: Boolean,
    right: Boolean,
    bottom: Boolean
  },
};
</script>

<style lang="scss" scoped>
.arrow-width {
  width: 24px;
  height: 24px;
  * {
    color: white !important;
  }
  .style-scope {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);
  }
  &.left {
    transform: rotate(270deg);
  }
  &.right {
    transform: rotate(90deg);
  }
  &.bottom {
    transform: rotate(180deg);
  }
}
</style>
