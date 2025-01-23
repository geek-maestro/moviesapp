import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const FavLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerLeft: () => <DrawerToggleButton /> }} />
    </Stack>
  );
};

export default FavLayout;
