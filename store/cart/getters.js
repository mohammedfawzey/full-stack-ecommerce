export default {
  G_isProductInCart(state) {
    return (theProduct) => {
      return state.S_cart.find((el) => {
        return el.product.id == theProduct.id;
      });
    };
  },
  G_totalPrice(state) {
    if (state.S_cart.length >= 1) {
      return state.S_cart.reduce((a, c) => {
        return a + c.product.price * c.quantity;
      }, 0);
    } else {
      return 0;
    }
  },
};
