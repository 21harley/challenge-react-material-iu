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
    }
  },

})
export const { initState } = StoreItem.actions
export default StoreItem.reducer