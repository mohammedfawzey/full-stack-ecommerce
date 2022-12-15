<template>
  <v-card class="pa-5 py-3 mx-auto v-box-shadow" max-width="400">
    <!-- welcome message -->
    <div class="welcome-message mb-4 text-center">
      <div class="the-image d-flex align-center justify-center">
        <v-img
          :src="require('@/assets/imgs/favicon.png')"
          width="55"
          height="55"
          max-height="55"
          max-width="55"
          contain
        >
          <template #placeholder>
            <BaseSkeletonLoader type="avatar" />
          </template>
        </v-img>
      </div>

      <div class="text-h5 font-weight-medium mt-2">
        {{ login ? "Login to your account" : "Create New Account" }}
      </div>
    </div>
    <!-- enter your detail -->
    <div class="manual-details">
      <v-form>
        <v-text-field
          prepend-inner-icon="mdi-account-outline"
          outlined
          label="Name"
          v-if="!login"
          color="base"
        />
        <v-text-field
          prepend-inner-icon="mdi-email-outline"
          outlined
          label="Email"
          color="base"
        />
        <v-text-field
          prepend-inner-icon="mdi-lock-outline"
          outlined
          color="base"
          label="Password"
        />
        <v-checkbox label="remember me" hide-details dense color="base" />
        <v-btn
          block
          large
          class="mt-4"
          :color="login ? 'base darken-1' : 'surface darken-1'"
          dark
        >
          <span class="text-capitalize">{{
            login ? "login" : "Register"
          }}</span>
        </v-btn>
      </v-form>
    </div>
    <div class="redirect-to-register-btn mt-4 text-center">
      <div class="text-body-2">
        <span
          >{{ login ? "Don't have an account?" : "Already have an account?" }}
        </span>
        <nuxt-link
          :to="{ name: 'auth', query: { auth: login ? 'signup' : 'login' } }"
        >
          <span
            class="font-weight-bold"
            :class="[login ? 'surface--text' : 'base--text']"
            >{{ login ? "Register" : "Login" }}</span
          >
        </nuxt-link>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    login: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.or-message {
  .line {
    width: 100%;
    height: 1px;
  }
}
</style>
