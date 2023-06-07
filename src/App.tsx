import './App.scss'
import RoutesApp from './routes/RoutesApp'
import { useAppDispatch,useAppSelector } from "./reduxer/index"
import { setStoreItems } from './reduxer/slice/StoreItems/StoreItems'
import { useEffect } from 'react'
import pages from './DatePages'

function App() {
  const store = useAppSelector(state => {
    return state.StoreItems
  })

  console.log(store,"init");
  const dispatch = useAppDispatch()
  dispatch(setStoreItems({pages:pages}))


  return (
    <>
      <RoutesApp/>
    </>
  )
}

export default App
