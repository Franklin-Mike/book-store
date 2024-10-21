import { create } from "zustand";

interface CartItem {
  id: string;
  quantity: number;
}

type State = {
  count: number;
  cart: Array<CartItem>;
};

type Action = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: CartItem["id"]) => void;
  totalCount: () => void;
};

// Define the Zustand store for the cart
const useCartStore = create<State & Action>((set) => ({
  // cart coung
  count: 0,

  // Cart state (array of cart items)
  cart: [],

  // Function to add an item to the cart
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // If the item already exists, increment its quantity
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }

      // If the item does not exist, add it to the cart with a quantity of 1
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  // Function to remove an item from the cart
  removeFromCart: (itemId) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === itemId
      );

      if (existingItem && existingItem?.quantity > 1) {
        // If the item exists and quantity is greater than 1, decrement the quantity
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === itemId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ),
        };
      }

      // If the item quantity is 1 or doesn't exist, remove it from the cart
      return { cart: state.cart.filter((cartItem) => cartItem.id !== itemId) };
    }),

  // Function to get the total number of items in the cart
  totalCount: () =>
    set((state) => ({
      count: state.cart.reduce((count, item) => count + item.quantity, 0),
    })),

  // Function to empty the cart
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
