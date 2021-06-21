// API/TMDBApi.js

const API_TOKEN = "c8697268acc5406f1d3c61343bbfd606";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN;
  
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}