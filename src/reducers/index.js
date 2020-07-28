import { combineReducers } from '@reduxjs/toolkit'
import settings from './settings'

const allReducers = () => combineReducers({ settings })

export default allReducers
