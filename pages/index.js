import { useState, useEffect } from 'react'
const API_KEY = '5f2868267e1f20d9d73cf62f19a75074'

export default function Home() {
  const [movies, setMovies] = useState({})

  useEffect(() => {
    async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )
      const json = await response.json()

      setMovies(json)
    }
  }, [])

  console.log(movies)

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
