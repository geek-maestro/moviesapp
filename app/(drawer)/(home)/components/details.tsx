import { View, ImageBackground } from 'react-native';
import React from 'react';
import { MediaType } from '~/interfaces/movies';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetails } from '~/api/server';
import { Main } from '~/tamagui.config';
import { H2, Image, Paragraph, ScrollView, Text, YStack } from 'tamagui';
import Animated from 'react-native-reanimated';

type detailsPageProps = {
  id: string;
  mediaType: MediaType;
};
const Details = ({ id, mediaType }: detailsPageProps) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(id, mediaType),
  });
  return (
    <Main>
      <ScrollView>
        <ImageBackground
          source={{ uri: `https://image.tmdb.org/t/p/w500/${movieQuery.data?.backdrop_path}` }}
          style={{ width: '100%', height: 400 }}>
          <Animated.Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${movieQuery.data?.poster_path}` }}
            alt={movieQuery.data?.title}
            borderRadius={10}
            style ={{ width: '50%', height: 300, marginLeft: 20, marginTop: 'auto' }}
            sharedTransitionTag={`${mediaType === 'movie' ? 'movie' : 'tv'}-${id}`}
          />
        </ImageBackground>
        <YStack enterStyle={{ opacity: 0, scale: 1.5, y: -10 }} animation = {'lazy'}>
          <H2 color={'lightblue'}>
            {movieQuery.data?.title || movieQuery.data?.name}
            <Text>{movieQuery.data?.release_date || movieQuery.data?.first_air_date}</Text>
          </H2>
          <Paragraph theme={'alt1_Card'}>{movieQuery.data?.tagline}</Paragraph>
          <Text fontSize={16}>{movieQuery.data?.overview}</Text>
        </YStack>
      </ScrollView>
    </Main>
  );
};

export default Details;
