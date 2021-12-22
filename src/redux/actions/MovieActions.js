export const fetchInTheaters = () => {
  return (dispatch) =>
    fetch('http://localhost:3000/movies')
      .then((resp) => resp.json())
      .then((movies) =>
        dispatch({ type: 'FETCH_IN_THEATERS', payload: movies })
      )
}

export const movieShow = (id) => {
  return (dispatch) =>
    fetch(`http://localhost:3000/movies/ + {id}`)
      .then((resp) => resp.json())
      .then((movies) => dispatch({ type: 'MOVIE_SHOW', payload: movies }))
}

// export const mostPopular = () => {
//   return (dispatch) =>
//     fetch('https://localhost:3000/popular')
//       .then((resp) => resp.json())
//       .then((movies) => dispatch({ type: 'MOST_POPULAR', payload: movies }))
// }

// work on a fetch to a route that will show the individual movie trailer
// export const trailer = () => {
//   return (dispatch) => fetch('')
// }
