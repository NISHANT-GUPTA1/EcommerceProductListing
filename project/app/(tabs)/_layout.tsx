import { View } from 'react-native';
import { Tabs } from 'expo-router';
import { Heart, Chrome as Home, Search, ShoppingCart } from 'lucide-react-native';
import { Header } from '@/components/Header';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ size, color }) => <Search size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            title: 'Wishlist',
            tabBarIcon: ({ size, color }) => <Heart size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Cart',
            tabBarIcon: ({ size, color }) => (
              <ShoppingCart size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}