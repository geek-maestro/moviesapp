import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import Details from '../components/details'
import { MediaType } from '~/interfaces/movies'

const MovieItem = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    console.log("🚀 ~ MovieItem ~ id:", id)
  return (
    <Details id={id} mediaType={MediaType.TV} />
  )
}

export default MovieItem