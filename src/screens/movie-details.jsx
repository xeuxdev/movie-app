import React from "react"
import { View } from "react-native"
import { useFetch } from "../hooks/usefetch"
import { API_KEY } from "../api"

export default function MovieDetails() {
  const { data: movie, isLoading } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  )
  return <View>MovieDetails</View>
}
