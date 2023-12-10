
import axios from "axios";

const BASE_URL = "https://api.thecatapi.com/v1/images/";
const API_KEY = "live_vUGgn0z9rP4gwzGap9BoanavCaOe0HzWhOXC8HzdjrlRQxJeGfLIBuR3rhpKlQTB"

export const getCatBreeds = () => {
    const response= axios.get(`${BASE_URL}search?limit=15&has_breeds=1&api_key=${API_KEY}`)
    return response;
}

export const getBreedDetails =  (id) => {
    const response= axios.get(`${BASE_URL}${id}`)
    return response;
}
