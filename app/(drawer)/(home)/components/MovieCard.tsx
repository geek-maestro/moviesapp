import { Link } from 'expo-router';
import Animated from 'react-native-reanimated';
import { Card, Image, Paragraph, Text, YStack } from 'tamagui';
import { Result } from '~/interfaces/movies';

type MovieCardProps = {
  movie: Result;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link
      href={`/(drawer)/(home)/(${movie.media_type === 'movie' ? 'movie' : 'tv'})/${movie.id}`}
      asChild>
      <Card
        elevate
        width={150}
        height={260}
        scale={0.95}
        hoverStyle={{ scale: 1.05 }}
        pressStyle={{ scale: 0.95 }}
        animation={'bouncy'}>
        <Card.Header p={0}>
          <Animated.Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
            alt={movie.title}
            sharedTransitionTag={`${movie.media_type === 'movie' ? 'movie' : 'tv'}-${movie.id}`}
            style={{ width: '100%', height: 150 }}
          />
        </Card.Header>
        <Card.Footer p={5}>
          <YStack>
            <Text fontSize={20} color={'lightblue'}>
              {movie.title || movie.name}
            </Text>
            <Paragraph theme={'alt1_Card'}>
                { new Date(movie.release_date! || movie.first_air_date!).getFullYear()}
            </Paragraph>
          </YStack>
        </Card.Footer>
        <Card.Background />
      </Card>
    </Link>
  );
};

export default MovieCard;
