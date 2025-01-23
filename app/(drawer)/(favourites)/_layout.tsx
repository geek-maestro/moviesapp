import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const FavLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default FavLayout;
