import { useEffect, useState } from 'react'
import { phimAPI } from './../api/phimAPI'

function useMovieDetail(movieId) {
  const [movieContent, setMovieContent] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const { content } = await phimAPI.getInfoMovie(movieId)
        setMovieContent(content)
      } catch (error) {}
    })()
  }, [movieId])

  return { movieContent, loading }
}

export default useMovieDetail
