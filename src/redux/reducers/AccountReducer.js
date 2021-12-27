const initialState = {
  users: [],
  user: '',
  id: '',
}

export default function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
      }
    case 'SET_USER':
      console.log('set user')
      return {
        ...state,
        user: action.payload,
      }
    case 'SUBMIT_SIGNUP':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return { ...state }
  }
}
