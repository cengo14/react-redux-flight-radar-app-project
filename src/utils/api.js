import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});
export default api;
