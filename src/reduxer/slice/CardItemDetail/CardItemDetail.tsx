
import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './ItenrfacesDetailItem'


// eslint-disable-next-line react-refresh/only-export-components
const CardItemDetail = createSlice({
  name: 'CardItemDetail',
  initialState,
  reducers: {
    initItem: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = initialState
    },
    setItemsCardSlice: (state, action) => {
      return {
        detailItem:action.payload.item,
        status:action.payload.status
      }
    },
  },
})
export const { setItemsCardSlice,initItem} = CardItemDetail.actions
export default CardItemDetail.reducer