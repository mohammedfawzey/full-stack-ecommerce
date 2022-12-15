<template>
  <v-app>
    <v-main class="pa-0 default-bg">
      <v-container>
        <v-row dense class="flex-column-reverse flex-md-row">
          <v-col cols="12" md="7">
            <CheckoutShippingInfo />
          </v-col>
          <v-col cols="12" md="5">
            <CheckoutOrderSummary />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
