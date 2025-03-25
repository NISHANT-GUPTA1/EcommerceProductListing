import { StyleSheet, View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Search, ShoppingCart, MapPin, Globe, ChevronDown } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useStore } from '@/store/useStore';

export function Header() {
  const router = useRouter();
  const cart = useStore((state) => state.cart);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.logo} onPress={() => router.push('/')}>
          <Text style={styles.logoText}>ShopVista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.location}>
          <MapPin size={18} color="#fff" />
          <View>
            <Text style={styles.locationLabel}>Deliver to</Text>
            <Text style={styles.locationText}>New York 10001</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#666"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Search size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.language}>
          <Globe size={18} color="#fff" />
          <Text style={styles.languageText}>EN</Text>
          <ChevronDown size={16} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => router.push('/cart')}>
          <ShoppingCart size={24} color="#fff" />
          {cartItemCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {Platform.OS === 'web' && (
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>All Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Today's Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>New Releases</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Customer Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Gift Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Registry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Sell</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131921',
    paddingTop: Platform.OS === 'web' ? 0 : 40,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 16,
  },
  logo: {
    marginRight: 8,
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
  },
  locationLabel: {
    color: '#ccc',
    fontSize: 12,
  },
  locationText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'web' ? 8 : 6,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#febd69',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
  },
  language: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
  },
  languageText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#f08804',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: '#232f3e',
    padding: 8,
    gap: 24,
    overflow: 'auto',
  },
  menuItem: {
    paddingHorizontal: 8,
  },
  menuText: {
    color: '#fff',
    fontSize: 14,
  },
});