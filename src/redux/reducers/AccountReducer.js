const initialUser = {
  user: '',
}

const initialState = {
  users: [],
  user: initialUser,
}

export default function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        users: action.payload,
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'SUBMIT_SIGNUP':
      return {
        ...state,
        user: action.payload,
      }
    case 'SUBMIT_LOGIN':
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGOUT':
      return { ...state, user: initialUser }

    default:
      return { ...state }
  }
}
