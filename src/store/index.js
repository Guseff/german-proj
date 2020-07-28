import { createStore } from 'redux'

import allReducers from '../reducers'
import { LANGUAGES } from '../constants'

const initialState = {
  settings: {
    language: LANGUAGES.EN,
  },
}

console.log(`initial - ${JSON.stringify(initialState)}`)

const store = createStore(
  allReducers,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(`initial store - ${JSON.stringify(store.getState())}`)

export default store
