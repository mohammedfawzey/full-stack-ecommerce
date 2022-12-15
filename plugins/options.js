// mixins
import "../utils/mixins";

// filters
import "../utils/filters";







// import Vue from "vue";

// const newMixin = {
//   methods: {
//     async fireSwal(options) {
//       options.icon ??= "success";
//       options.timer ??= 2000;
//       options.toast ??= true;
//       options.showProgressBar ??= true;
//       options.icon ??= "success";
//       options.iconColor ??= "success";
//       await this.$swal({
//         toast: options.toast,
//         icon: options.icon,
//         position: options.toast ? "top-end" : "center-center",
//         title: options.title,
//         text: options.text,
//         showProgressBar: options.showProgressBar,
//         timer: options.timer,
//         timerProgressBar: options.showProgressBar ? true : false,
//         iconColor: options.iconColor,
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         showConfirmButton: options.toast ? false : true,
//       }).then(() => {
//         options.callBack();
//       });
//     },
//   },
// };
// Vue.mixin(newMixin);

// export default async ({ $axios, store, $content, redirect, route }, inject) => {
//   // ?__redirectToHomePageIfInMenRoute-start
//   // if (route.path == "/men" || route.path == "/sports") {
//   // }
//   // ?__redirectToHomePageIfInMenRoute-end
//   // ?__Load__Cart__From__Local__Storage-start
//   store.commit("cart/M_loadCartFromLocalStorage"); //TODO:: Very Important => (store in plugins called store not $store)
//   // ?__Load__Cart__From__Local__Storage-end
//   // ?__Load__Fav__From__Local__Storage-start
//   store.commit("fav/M_loadFav");
//   // ?__Load__Fav__From__Local__Storage-end
//   // ?__format_money
//   // await inject("formatMoney", (money) => {
//   //   if (money) {
//   //     return new Intl.NumberFormat({
//   //       style: "currency",
//   //       currency: "USD",
//   //     }).format(money);
//   //   } else {
//   //     return new Intl.NumberFormat({
//   //       style: "currency",
//   //       currency: "USD",
//   //     }).format(money);
//   //   }
//   // });
//   let products = await $content("products").fetch();
//   products = products.filter((el) => {
//     return el.category.name != "Clothes";
//   });

//   // ?__getData
//   //
//   let data = products.filter((el) => {
//     if (el.images[0]) {
//       return (
//         el.id != 207 &&
//         !el.images[0].includes("images.app.goo") &&
//         el.images[0].includes("https") &&
//         el.images[0] != undefined &&
//         el.images != [] &&
//         el.images.length > 1 &&
//         el.images[0].length != 0
//       );
//     } else {
//       return (
//         el.id != 207 && el.images[0] != undefined && el.images[0].length != 0
//       );
//     }
//   });
//   inject("products", data);
// };
