/* eslint-disable import/no-anonymous-default-export */
const API_KEY = 'ed24079d1d21b05c971a25a032726775';
const API_BASE = 'https://api.themoviedb.org/3';
const API_LANGUAGE = 'language=pt-BR';

/*
-Originais da netflix
-Recomendados (trending)
-Em alta (top rated)
-Ação
-Comédia
-Romance
-Documentário
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(
          `/discover/tv?with_network=213&${API_LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(
          `/trending/all/week?${API_LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(
          `/movie/top_rated?${API_LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(
          `/discover/movie?with_genres=18&${API_LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(
          `/discover/movie?with_genres=35&${API_LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/discover/movie?with_genres=27&${API_LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(
          `/discover/movie?with_genres=10749&${API_LANGUAGE}&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(
          `/discover/movie?with_genres=99&${API_LANGUAGE}&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      // eslint-disable-next-line default-case
      switch (type) {
        case 'movie':
          info = await basicFetch(
            `/movie/${movieId}?${API_LANGUAGE}&api_key=${API_KEY}`
          );
          break;
        case 'tv':
          info = await basicFetch(
            `/tv/${movieId}?${API_LANGUAGE}&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
