import createStore from '@reduxjs/toolkit'

import allReducers from '../reducers'
import { LANGUAGES } from '../constants'

const initialState = {
  lang: LANGUAGES.EN,
}

const store = createStore(
  allReducers,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
