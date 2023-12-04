export const API_KEY = "d46ec9fa47c8144231606d2ec0e72435"

export async function getNowPlaying() {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZlYzlmYTQ3YzgxNDQyMzE2MDZkMmVjMGU3MjQzNSIsInN1YiI6IjY1NWUxMTU5N2YyZDRhMDBlYTI1YzAzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JDb7XZkWy95Gq-FhmOy4FXRoMdoPIm-h_-o21C_9PKs",
    },
  }

  try {
    const request = await fetch(url, options)

    const response = await request.json()

    return response
  } catch (error) {
    console.log("error", "=>", error)
  }
}

export async function getUpcoming() {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZlYzlmYTQ3YzgxNDQyMzE2MDZkMmVjMGU3MjQzNSIsInN1YiI6IjY1NWUxMTU5N2YyZDRhMDBlYTI1YzAzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JDb7XZkWy95Gq-FhmOy4FXRoMdoPIm-h_-o21C_9PKs",
    },
  }

  try {
    const req = await fetch(url, options)
    const res = await req.json()

    return res
  } catch (error) {
    console.log("error", "=>", error)
  }
}

export async function getTopMovies() {
  const url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZlYzlmYTQ3YzgxNDQyMzE2MDZkMmVjMGU3MjQzNSIsInN1YiI6IjY1NWUxMTU5N2YyZDRhMDBlYTI1YzAzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JDb7XZkWy95Gq-FhmOy4FXRoMdoPIm-h_-o21C_9PKs",
    },
  }

  try {
    const req = await fetch(url, options)
    const res = await req.json()

    return res
  } catch (error) {
    console.log("error", "=>", error)
  }
}

export async function getAllMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`

  // https://api.themoviedb.org/3/discover/movie?api_key=${
  //       import.meta.env.VITE_API_KEY
  //     }&page=${currPage}
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZlYzlmYTQ3YzgxNDQyMzE2MDZkMmVjMGU3MjQzNSIsInN1YiI6IjY1NWUxMTU5N2YyZDRhMDBlYTI1YzAzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JDb7XZkWy95Gq-FhmOy4FXRoMdoPIm-h_-o21C_9PKs",
  //     },
  //   }

  try {
    const req = await fetch(url, options)
    const res = await req.json()

    return res
  } catch (error) {
    console.log("error", "=>", error)
  }
}

export async function getMovieDetails(movieId) {
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    )

    const response = await request.json()
  } catch (error) {
    console.log(response)
  }
}
