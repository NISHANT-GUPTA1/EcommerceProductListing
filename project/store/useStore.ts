import { create } from 'zustand';
import { Product } from '@/types/product';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StoreState {
  cart: { product: Product; quantity: number }[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  loadPersistedState: () => Promise<void>;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  wishlist: [],
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.product.id === product.id);
      const newCart = existingItem
        ? state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { product, quantity: 1 }];
      AsyncStorage.setItem('cart', JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  removeFromCart: (productId) => {
    set((state) => {
      const newCart = state.cart.filter((item) => item.product.id !== productId);
      AsyncStorage.setItem('cart', JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  updateQuantity: (productId, quantity) => {
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      AsyncStorage.setItem('cart', JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  toggleWishlist: (product) => {
    set((state) => {
      const isInWishlist = state.wishlist.some((item) => item.id === product.id);
      const newWishlist = isInWishlist
        ? state.wishlist.filter((item) => item.id !== product.id)
        : [...state.wishlist, product];
      AsyncStorage.setItem('wishlist', JSON.stringify(newWishlist));
      return { wishlist: newWishlist };
    });
  },
  loadPersistedState: async () => {
    try {
      const [cartData, wishlistData] = await Promise.all([
        AsyncStorage.getItem('cart'),
        AsyncStorage.getItem('wishlist'),
      ]);
      
      set({
        cart: cartData ? JSON.parse(cartData) : [],
        wishlist: wishlistData ? JSON.parse(wishlistData) : [],
      });
    } catch (error) {
      console.error('Error loading persisted state:', error);
    }
  },
}));