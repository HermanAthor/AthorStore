import ProductInterface, { Product } from "./fetchingData";

interface addToCartProps {
  product: ProductInterface | Product;
  cartItems: ProductInterface[] | Product[];
  setCartItems: any;
}
interface removeFromCartProps {
  item: Product | ProductInterface;
  cartItems: Product[] | ProductInterface[];
  setCartItems: any;
}

export const addToCart = async ({
  product,
  cartItems,
  setCartItems,
}: addToCartProps) => {
  //const [cartItems, setCartItems] = useRecoilState(cartState);
  const isItemInCart = await cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (isItemInCart) {
    setCartItems(
      cartItems.map((cartItem: any) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }
};

export const removeFromCart = ({
  item,
  cartItems,
  setCartItems,
}: removeFromCartProps) => {
  const isItemInCart: any = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (isItemInCart.quantity === 1) {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
  } else {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
          : cartItem
      )
    );
  }
};
