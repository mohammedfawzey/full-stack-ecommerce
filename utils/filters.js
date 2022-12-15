import Vue from "vue";

// 3333333 => 33,333
Vue.filter("formatMoney", (money) => {
  if (money.toString().includes(",")) {
    console.log("yes has");
  }
  if (!money) {
    console.log("error !!");
    // return "nothing to show";
    return 0;
  }
  return new Intl.NumberFormat({ style: "currency", currency: "USD" }).format(
    Number(money)
  );
});

//
Vue.filter("uppercase", function (text) {
  return text.toString().toUpperCase();
});
