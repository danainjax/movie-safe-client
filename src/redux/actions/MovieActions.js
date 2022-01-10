export const fetchInTheaters = () => {
  return (dispatch) =>
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((movies) =>
        dispatch({ type: 'FETCH_IN_THEATERS', payload: movies })
      )
}

export const getMovie = (id) => {
  return (dispatch) =>
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((movie) => dispatch({ type: 'GET_MOVIE', payload: movie }))
}

export const clearMovie = () => ({ type: 'CLEAR_MOVIE' })

export const submitReview = (review, movieId) => {
  console.log('submit review action')
  return (dispatch) =>
    fetch(`http://localhost:3000/movies/${movieId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token,
      },
      body: JSON.stringify(review),
    }).then((response) => {
      if (response.ok) {
        response
          .json()
          .then((review) => dispatch({ type: 'ADD_REVIEW', payload: review }))
      } else {
        response.json().then((response) => alert(response.errors))
      }
    })
}

export const getTrailer = (id) => {
  return (dispatch) =>
    fetch(`http://localhost:3000/trailers/${id}`)
      .then((resp) => resp.json())
      .then((trailer) => dispatch({ type: 'GET_TRAILER', payload: trailer }))
}
