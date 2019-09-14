export default function createStore(reducer) {
  // add your code here
  let state

  
  const dispatch = action => {
    state = reducer(state, action)
    render()
  }
  dispatch({type: "@@INIT"})

  const getState = () => {
    return state
  }
  
  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
