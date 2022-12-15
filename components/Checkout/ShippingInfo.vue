<template>
  <v-card class="px-3 py-6 px-sm-6 v-box-shadow mx-auto" max-width="500">
    <div class="text-h4 mb-4 font-weight-bold">Shipping Address</div>
    <v-form
      ref="form"
      @submit.prevent="placeOrder"
      lazy-validation
      v-model="valid"
    >
      <v-row dense>
        <template v-for="(item, itemInd) in userInfos">
          <v-col
            v-if="!item.textArea"
            :key="itemInd"
            :cols="item.grid && !$vuetify.breakpoint.xsOnly ? item.grid : 12"
          >
            <v-text-field
              v-model="item.state"
              :label="item.label"
              dense
              :rules="[rules.required]"
              outlined
            />
          </v-col>
          <v-col :key="itemInd" v-else cols="12">
            <v-textarea
              :label="item.label"
              dense
              outlined
              filled
              :rules="[rules.required]"
            />
          </v-col>
        </template>
      </v-row>
      <div class="text-h5 text-sm-h4 mb-4 font-weight-bold">
        Shipping Methods
      </div>
      <v-checkbox
        v-model="checkbox"
        :rules="[rules.required]"
        label="$5,00 Flat Rate"
        color="base"
      />
      <div class="px-3">
        <v-btn
          :disabled="!valid || isBtnClicked"
          :loading="isBtnClicked"
          block
          color="surface darken-1"
          large
          :dark="valid && !isBtnClicked"
          type="submit"
        >
          <span class="text-capitalize">place order</span>
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    userInfos: [
      {
        label: "First Name",
        state: "",
        grid: 6,
      },
      {
        label: "Last Name",
        state: "",
        grid: 6,
      },
      {
        label: "E-mail",
        state: "",
      },
      {
        label: "street address",
        state: "",
      },
      {
        label: "company name",
        state: "",
        grid: 6,
      },
      {
        label: "city",
        state: "",
        grid: 3,
      },
      {
        label: "country",
        state: "",
        grid: 3,
      },
      {
        label: "phone number",
        state: "",
      },
      {
        label: "zip/postal code",
        state: "",
        grid: 6,
      },
      {
        label: "state/province",
        state: "",
        grid: 6,
      },
      {
        label: "order notes (optional)",
        state: "",
        textArea: true,
      },
    ],
    valid: false,
    checkbox: false,
    rules: {
      required: (v) => !!v || "field required",
    },
    isBtnClicked: false,
  }),
  methods: {
    placeOrder() {
      if (this.$refs.form.validate()) {
        this.fireSwal();
      }
    },
    fireSwal() {
      this.isBtnClicked = true;
      this.$swal
        .fire({
          icon: "info",
          title: "Place Orders",
          text: "are you sure want to place orders",
          showCancelButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          confirmButton: "Submit",
          cancelButtonColor: "red",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal
              .fire({
                icon: "info",
                timer: 3000,
                timerProgressBar: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                title: "Processing your order",
                text: "Please wait....",
              })
              .then((result) => {
                if (result) {
                  this.$store.commit("cart/M_deleteAllProducts");
                  this.$swal
                    .fire({
                      icon: "success",
                      allowOutsideClick: false,
                      allowEscapeKey: false,
                      title: "Checkout Completed",
                      text: "Thank you for purchasing",
                      showConfirmButton: true,
                    })
                    .then(() => {
                      this.$router.push({ path: "/" });
                    });
                }
              });
          } else {
            this.isBtnClicked = false;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
