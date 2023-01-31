import axios from 'axios';
import React from 'react'


const movieDB = axios.create({
  baseURL:'https://api.themoviedb.org/3/movie',
  params:{
    api_key:'84197f7efd0ae21a39764664d2d761cf',
    language:'es-ES'
  }
})
export default movieDB;