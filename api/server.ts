import { MediaType, TrendingMovies } from "~/interfaces/movies";

export const api_key = process.env.EXPO_PUBLIC_TMDB_API_KEY;
export const baseUrl = 'https://api.themoviedb.org/3/'

export const getTrendingMovies = async (page: number) : Promise<TrendingMovies> => {
    const response = await fetch(`${baseUrl}trending/all/day?language=en-US&api_key=${api_key}&page=${page}`);
    const json = await response.json();
    console.log("🚀 ~ getTrendingMovies ~ json:", json)
    return json;
}

export const getSearchResults = async ( query: string) : Promise<TrendingMovies> => {
    const response = await fetch(`${baseUrl}search/multy?language=en-US&api_key=${api_key}&query=${encodeURIComponent(query)}`);
    const result = await response.json();
    return result;
}

export const getMovieDetails = async (movieId: number, type: MediaType) : Promise<any> => {
    const response = await fetch(`${baseUrl}${type}/${movieId}?language=en-US&api_key=${api_key}`);
    const result = await response.json();
    return result;
}