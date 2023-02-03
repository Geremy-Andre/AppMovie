import React from "react";
import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '32b521f8aaac24370d0df9cacb7a9e03',
        language: 'es-ES'
    }
});

export default movieDB;
