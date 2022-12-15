const findTheProduct = ({ product, cart }) => {
  return cart.find((el) => el.product.id == product.id);
};

export default findTheProduct;
