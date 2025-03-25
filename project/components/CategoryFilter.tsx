import { StyleSheet, ScrollView, TouchableOpacity, Text, View, Image } from 'react-native';

const categories = [
  { id: 1, name: 'All', icon: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=100' },
  { id: 2, name: 'Electronics', icon: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=100' },
  { id: 3, name: "Men's Clothing", icon: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=100' },
  { id: 4, name: "Women's Clothing", icon: 'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?w=100' },
  { id: 5, name: 'Jewelry', icon: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100' }
];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.category,
            selectedCategory === category.name && styles.selectedCategory,
          ]}
          onPress={() => onSelectCategory(category.name)}>
          <Image source={{ uri: category.icon }} style={styles.categoryIcon} />
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category.name && styles.selectedCategoryText,
            ]}>
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  category: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    minWidth: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedCategory: {
    backgroundColor: '#007AFF',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: '#1C1C1E',
    textAlign: 'center',
  },
  selectedCategoryText: {
    color: 'white',
  },
});