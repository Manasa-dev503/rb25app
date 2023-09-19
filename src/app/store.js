import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { mealsApi } from '../services/mealsApi'
export const store = configureStore({
  reducer: {
    [mealsApi.reducerPath]: mealsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(mealsApi.middleware),
})
setupListeners(store.dispatch)