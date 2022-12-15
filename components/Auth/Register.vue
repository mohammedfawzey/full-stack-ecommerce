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
          contain
        >
          <template #placeholder>
            <BaseSkeletonLoader type="image" />
          </template>
        </v-img>
      </div>

      <div class="text-h5 font-weight-medium mt-2">Create New Account</div>
    </div>
    <!-- enter your detail -->
    <div class="manual-details">
      <v-form>
        <v-text-field
          prepend-inner-icon="mdi-account-outline"
          outlined
          label="Name"
        />
        <v-text-field
          prepend-inner-icon="mdi-email-outline"
          outlined
          label="Email"
        />
        <v-text-field
          prepend-inner-icon="mdi-lock-outline"
          outlined
          label="Password"
        />
        <v-checkbox label="remember me" hide-details dense color="base" />
        <v-btn block large class="mt-4" color="base darken-1" dark>
          <span class="text-capitalize">login</span>
        </v-btn>
      </v-form>
    </div>
    <div class="redirect-to-register-btn mt-4 text-center">
      <div class="text-body-2">
        <span>Already have an account? </span>
        <nuxt-link :to="{ name: 'auth', query: { auth: 'login' } }">
          <span class="base--text font-weight-bold">Login</span>
        </nuxt-link>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.or-message {
  .line {
    width: 100%;
    height: 1px;
  }
}
</style>
