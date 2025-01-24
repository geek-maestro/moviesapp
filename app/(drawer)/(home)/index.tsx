import { View, Text, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Card, Input, ScrollView, Spinner, YStack } from 'tamagui';
import { Container, Main, Subtitle, Title } from '~/tamagui.config';
import { Link } from 'expo-router';
import { api_key, baseUrl, getSearchResults, getTrendingMovies } from '~/api/server';
import { useQuery } from '@tanstack/react-query';
import MovieCard from './components/MovieCard';
import useDebounce from '~/utils/useDebounce';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 1000);
  const trending = useQuery({
    queryKey: ['trending'],
    queryFn: () => getTrendingMovies(1),
  });

  const search = useQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: (searchTerm) => getSearchResults(debouncedSearch),
    enabled: debouncedSearch.length > 0,
  });

  return (
    <Main style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: 'https://image.tmdb.org/t/p/w500/1G1xlD3Hx9o7vQq5yVXfZqZy0Uu.jpg' }}
        style={{ width: '100%', height: 200 }}>
        <Link href={'/(drawer)/(home)/(movie)/1'} asChild>
          <Text>Movie</Text>
        </Link>
        <Container>
          <YStack>
            <Title
              enterStyle={{ opacity: 0, scale: 1.5, y: -10 }}
              animation={'quick'}
              color={'#fff'}>
              Trending
            </Title>
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChangeText={setSearchTerm}
              size={'$6'}
            />
          </YStack>
        </Container>
      </ImageBackground>

      <Subtitle enterStyle={{ opacity: 0, scale: 1.5, y: -10 }} animation={'bouncy'} p={10}>
        {search?.data?.results ? 'Search Results' : 'Trending'}
      </Subtitle>
      {(trending.isLoading || search.isLoading) && <Spinner size="large" color={'$blue10Light'} />}

      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, padding: 10 }}>
        {search.data?.results ? (
          <>{search.data?.results?.map((item) => <MovieCard movie={item} key={item.id} />)}</>
        ) : (
          <>{trending.data?.results?.map((item) => <MovieCard movie={item} key={item.id} />)}</>
        )}
      </ScrollView>
    </Main>
  );
};

export default Home;
