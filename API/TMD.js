// API/TMDBApi.js
import { API_TOKEN } from "../.env"

export function getFilmsFromApiWithSearchedText(text, page) {
  const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&language=fr&query=" + text + "&page=" + page

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("error:", error));

}
export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi(id) {
  //https://api.themoviedb.org/3/movie/343611?api_key=c8697268acc5406f1d3c61343bbfd606&language=fr
  const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + API_TOKEN + "&language=fr";

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("error:", error));
}