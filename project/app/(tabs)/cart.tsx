import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useStore } from '@/store/useStore';
import { Minus, Plus, Trash2 } from 'lucide-react-native';

export default function CartScreen() {
  const { cart, updateQuantity, removeFromCart } = useStore();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.product.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle} numberOfLines={2}>
                {item.product.title}
              </Text>
              <Text style={styles.itemPrice}>
                ${(item.product.price * item.quantity).toFixed(2)}
              </Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => updateQuantity(item.product.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                style={[
                  styles.quantityButton,
                  item.quantity <= 1 && styles.quantityButtonDisabled,
                ]}>
                <Minus size={16} color={item.quantity <= 1 ? '#8E8E93' : '#007AFF'} />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => updateQuantity(item.product.id, item.quantity + 1)}
                style={styles.quantityButton}>
                <Plus size={16} color="#007AFF" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => removeFromCart(item.product.id)}
                style={styles.removeButton}>
                <Trash2 size={16} color="#FF3B30" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Your cart is empty. Start shopping!
          </Text>
        }
      />
      {cart.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1C1C1E',
    padding: 16,
  },
  cartItem: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemInfo: {
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    padding: 8,
  },
  quantityButtonDisabled: {
    opacity: 0.5,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 16,
    minWidth: 24,
    textAlign: 'center',
  },
  removeButton: {
    marginLeft: 'auto',
    backgroundColor: '#FFF2F2',
    borderRadius: 8,
    padding: 8,
  },
  footer: {
    backgroundColor: 'white',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007AFF',
  },
  checkoutButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: '#8E8E93',
    fontSize: 16,
    marginTop: 32,
    paddingHorizontal: 32,
  },
});