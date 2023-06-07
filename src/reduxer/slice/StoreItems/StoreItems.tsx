import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './IterfacesItem'

const StoreItem = createSlice({
  name: 'StoreItems',
  initialState,
  reducers: {
    initState: (state) => {
      state.liastPages = initialState.liastPages
    },
    setStoreItems: (state, action) => {
      state.liastPages = action.payload.pages
    },
  },

})
export const { initState,setStoreItems } = StoreItem.actions
export default StoreItem.reducer