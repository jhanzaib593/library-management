import { configureStore } from '@reduxjs/toolkit'
import librarySlice from './librarySlice'

const store =  configureStore({
    reducer: librarySlice
  })

export default store

