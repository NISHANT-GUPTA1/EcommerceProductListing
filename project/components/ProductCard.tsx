import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Heart } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Product } from '@/types/product';
import { useStore } from '@/store/useStore';

interface ProductCardProps {
  product: Product;
  numColumns: number;
}

export function ProductCard({ product, numColumns }: ProductCardProps) {
  const router = useRouter();
  const { wishlist, toggleWishlist } = useStore();
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <TouchableOpacity
      style={[styles.container, { width: `${100 / numColumns}%` }]}
      onPress={() => router.push(`/product/${product.id}`)}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <TouchableOpacity
        style={styles.wishlistButton}
        onPress={() => toggleWishlist(product)}>
        <Heart
          size={20}
          color={isInWishlist ? '#FF3B30' : '#8E8E93'}
          fill={isInWishlist ? '#FF3B30' : 'none'}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    backgroundColor: '#F5F5F5',
  },
  wishlistButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    padding: 12,
  },
  category: {
    fontSize: 12,
    color: '#8E8E93',
    textTransform: 'capitalize',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    color: '#1C1C1E',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
});