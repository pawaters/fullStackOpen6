const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

// 1) Reducer: define what each action does
const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const newState = {
        good: state.good + 1,
        bad: state.bad,
        ok: state.ok
      }
      return newState
    case 'OK':
      return state
    case 'BAD':
      return state
    case 'ZERO':
      return state
    default: return state
  }
  
}

export default counterReducer