import { findTheProduct } from "../../utils";
export default {
  M_getSingleProduct(state, payload) {
    state.S_singleProduct = payload;
  },
  M_addToCart(state, payload) {
    // check first if the product exist in S_cart
    // payload = {id,...} | cart = [{product:{id,...},quantity:1}]
    const PRODUCT_IN_CART = state.S_cart.find((el) => {
      return el.product.id == payload.id;
    });
    if (PRODUCT_IN_CART) {
      // increase quantity
      PRODUCT_IN_CART.quantity++;
    } else {
      // add to cart with quantity:1
      state.S_cart.push({ product: payload, quantity: 1 });
    }
  },
  M_increaseProductQuantity(state, payload) {
    // find the product
    const THE_PRODUCT = findTheProduct({
      product: payload,
      cart: state.S_cart,
    });
    if (THE_PRODUCT) {
      // can't be more the stock
      THE_PRODUCT.quantity++;
    }
  },
  M_decreaseProductQuantity(state, payload) {
    // find the product
    const THE_PRODUCT = findTheProduct({
      product: payload,
      cart: state.S_cart,
    });
    if (THE_PRODUCT && THE_PRODUCT.quantity >= 1) {
      THE_PRODUCT.quantity--;
    }
    if (THE_PRODUCT.quantity <= 0) {
      state.S_cart = state.S_cart.filter((el) => {
        return el.product.id != payload.id;
      });
    }
  },
  M_deleteProduct(state, payload) {
    state.S_cart = state.S_cart.filter((el) => {
      return el.product.id != payload.id;
    });
  },
  M_deleteAllProducts(state) {
    state.S_cart = [];
  },
  M_addNotification(state, text = "product added successfully") {
    // message = {id,text}
    const id = (Math.random().toString(36) + Date.now().toString(36)).substr(2);
    state.S_notifications.push({ id, text });
  },
  M_removeNotification(state, notification) {
    // state.S_notifications = state.S_notifications.filter((el) => {
    //   return el.id != notification.id;
    // });
    // state.S_notifications.shift();
    state.S_notifications.splice(
      0,
      state.S_notifications.indexOf(notification) + 1
    );
  },
};
