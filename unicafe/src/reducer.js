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
      const newStateOk = {
        good: state.good,
        bad: state.bad,
        ok: state.ok + 1
      }
      return newStateOk
    case 'BAD':
      const newStateBad = {
        good: state.good,
        bad: state.bad + 1,
        ok: state.ok
      }
      return newStateBad
    case 'ZERO':
      const newStateZero = {
        good: 0,
        bad: 0,
        ok: 0
      }
      return newStateZero
    default: return state
  }
  
}

export default counterReducer