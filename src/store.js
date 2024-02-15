import { reactive } from 'vue'

export const store= reactive({
    urlFilm:'https://api.themoviedb.org/3/search/movie',
    apiKey:'?api_key=b05b1e00bee3d5707e204f7b6c5632fa',
    urlSeries:'https://api.themoviedb.org/3/search/tv',
    urlImg:'https://image.tmdb.org/t/p/',
    arrayFilm:[ ],
    arraySeries:[ ],
    cerca:' ',

})