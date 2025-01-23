import { DrawerToggleButton } from '@react-navigation/drawer';
import { colorTokens } from '@tamagui/themes';
import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorTokens.dark.red.red7,
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerLeft: () => <DrawerToggleButton tintColor='#fff'/>,
        }}
      />
      <Stack.Screen
        name="(movie)/[id]"
        options={{
          title: '',
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
