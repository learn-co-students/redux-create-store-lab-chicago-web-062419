export default function createStore(reducer) {
//Define state
  let state 

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  dispatch({type: '@@INIT'})

  return {
    getState,
    dispatch
  }
  // add your code here
}


function render() {
  const container = document.getElementById('container');
}

