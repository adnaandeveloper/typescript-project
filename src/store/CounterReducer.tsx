const counterReducer = (state = { counter: 0 }, action: any) => {
  switch (action.type) {
    case 'PLUS': {
      return {
        ...state,
        counter: state.counter + 1,
      }
    }

    default:
      return state
  }
}

export default counterReducer
