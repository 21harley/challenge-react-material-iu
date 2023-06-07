import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './IterfacesItem'

// eslint-disable-next-line react-refresh/only-export-components
const StoreItem = createSlice({
  name: 'StoreItems',
  initialState,
  reducers: {
    initState: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = initialState
    },
    setStoreItems: (state, action) => {
      return action.payload.pages
    },
  },

})
export const { initState,setStoreItems } = StoreItem.actions
export default StoreItem.reducer