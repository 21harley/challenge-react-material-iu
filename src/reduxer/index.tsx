import { configureStore } from '@reduxjs/toolkit'
import StoreItems from './slice/StoreItems/StoreItems'
import CardItemDetails from './slice/CardItemDetail/CardItemDetail'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'

const store = configureStore({
  reducer: {
    StoreItems,
    CardItemDetails
  },
  
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store