const API_TOKEN = "3c2d2a1b43e072ba505465f8050cf88f";

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text +"&page=" + page
    
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}