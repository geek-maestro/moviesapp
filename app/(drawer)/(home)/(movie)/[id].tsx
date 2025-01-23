import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const MovieItem = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    console.log("🚀 ~ MovieItem ~ id:", id)
  return (
    <View>
      <Text>MovieItem</Text>
    </View>
  )
}

export default MovieItem