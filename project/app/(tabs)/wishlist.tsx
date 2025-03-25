import { StyleSheet, View, FlatList, Text } from 'react-native';
import { ProductCard } from '@/components/ProductCard';
import { useStore } from '@/store/useStore';

export default function WishlistScreen() {
  const wishlist = useStore((state) => state.wishlist);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wishlist</Text>
      <FlatList
        data={wishlist}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Your wishlist is empty. Add some products you love!
          </Text>
        }
      />
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
  list: {
    padding: 8,
  },
  emptyText: {
    textAlign: 'center',
    color: '#8E8E93',
    fontSize: 16,
    marginTop: 32,
    paddingHorizontal: 32,
  },
});