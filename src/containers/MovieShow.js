import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMovie, clearMovie } from '../redux/actions/MovieActions'

import { useEffect } from 'react'

function MovieShow({
  getMovie,
  clearMovie,
  movie,
  fullTitle,
  id,
  title,
  image,
  plot,
  year,
  stars,
  runtime,
  releaseDate,
  director,
  genres,
}) {
  const routeId = useParams().id

  useEffect(() => {
    getMovie(routeId)
    return clearMovie
  }, [getMovie, routeId, clearMovie])

  return (
    <div className='card'>
      <div className='container'>
        <h1>{fullTitle}</h1>
        <img src={image} alt={title} />
        <p>{plot ? plot : 'Plot TBD'}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { ...state.movieStore.movie }
}

export default connect(mapStateToProps, { getMovie, clearMovie })(MovieShow)
