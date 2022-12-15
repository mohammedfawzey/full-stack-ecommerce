<template>
  <section id="home-f-news-letter">
    <v-sheet color="base" dark class="pt-16 pb-10">
      <v-container class="text-center text-md-left">
        <v-row dense>
          <v-col cols="12" md="6">
            <div class="text-h5 text-sm-h4 font-weight-bold">
              Join Our NewsLetter
            </div>
            <div class="text-caption">
              Get E-mail updates about our latest shop and
              <span class="surface--text">special offers</span>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-card
              max-width="500"
              class="mx-auto mt-4 mt-md-0 transparent"
              flat
            >
              <v-form
                v-model="valid"
                ref="form"
                @submit.prevent="sendEmail"
                lazy-validation
              >
                <div class="d-flex align-center justify-center">
                  <!-- hide-details -->
                  <v-text-field
                    outlined
                    prepend-inner-icon="mdi-email-outline"
                    placeholder="example@gmail.com..."
                    :rules="[rules.email]"
                    class="rounded-r-0"
                  ></v-text-field>
                  <v-btn
                    height="56"
                    class="rounded-l-0 mb-30"
                    :disabled="!valid"
                    type="submit"
                    outlined
                    depressed
                  >
                    <span class="text-capitalize hidden-xs-only"
                      >subscribe</span
                    >
                    <v-icon :right="$vuetify.breakpoint.smAndUp"
                      >mdi-send</v-icon
                    >
                  </v-btn>
                </div>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    rules: {
      required: (v) => !!v || "field required",
      email: (v) =>
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          v
        ) || "Invalid Email", //mohammed@gmail.com
    },
  }),
  // const re =
  // /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  methods: {
    sendEmail() {
      if (this.$refs.form.validate()) {
        this.fireSwal();
      }
    },
    fireSwal() {
      this.$swal
        .fire({
          icon: "success",
          position: "top-end",
          toast: true,
          timer: 2500,
          timerProgressBar: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          title: "Thank you for subscribing",
          showConfirmButton: false,
        })
        .then(() => {
          this.$refs.form.reset();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.mb-30 {
  margin-bottom: 30px;
}
</style>
