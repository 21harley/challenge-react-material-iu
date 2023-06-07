
import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './ItenrfacesDetailItem'
const CardItemDetail = createSlice({
  name: 'CardItemDetail',
  initialState,
  reducers: {
    initItem: (state) => {
      state.detailItem = initialState.detailItem;
      state.status = initialState.status;
    },
    setItemsCardSlice: (state, action) => {
      state.detailItem = action.payload.item;
      state.status = action.payload.status;
    },
  },
})
export const { setItemsCardSlice,initItem} = CardItemDetail.actions
export default CardItemDetail.reducer