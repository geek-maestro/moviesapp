import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer';
import React from 'react';

const Layout = () => {
  return (
    <Drawer
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colorTokens.dark.gray.gray7,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: -20
        }
      }}>
      <Drawer.Screen
        name="(home)"
        options={{
          title: 'Home',
          // headerShown: false,
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="(favourites)"
        options={{
          title: 'Favourites',
          // headerShown: false,
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
};

export default Layout;
