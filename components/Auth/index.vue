<template>
  <section
    id="auth"
    class="default-bg fill-height d-flex align-center justify-center"
  >
    <v-container class="py-0">
      <v-scroll-x-transition
        group
        :leave-absolute="$vuetify.breakpoint.smAndUp"
        :hide-on-leave="$vuetify.breakpoint.xsOnly"
      >
        <!-- <AuthRegister v-if="$route.query.auth === 'signup'" key="register" />
        <AuthLogin v-else key="login" /> -->
        <AuthFullAuth v-if="$route.query.auth === 'signup'" key="register" />
        <AuthFullAuth login v-else key="login" />
      </v-scroll-x-transition>
    </v-container>
  </section>
  <!-- </v-main>
  </v-app> -->
</template>
