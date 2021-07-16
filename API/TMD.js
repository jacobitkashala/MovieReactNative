// API/TMDBApi.js
import { API_TOKEN } from "../.env"

//const API_TOKEN = "c8697268acc5406f1d3c61343bbfd606";

export function getFilmsFromApiWithSearchedText(text, page) {
  console.log(API_TOKEN);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${page}`
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}