import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ErrorPage from "../pages/PageError404/Error404"
import Home from '../pages/PageHome/Home'
import ItemDetails from '../pages/PageItemDetails/ItemDetails'
import ItemType from '../pages/PageItemType/ItemType'

function RoutesApp () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/item-type/:name" element={<ItemType />} />
      <Route path="/item-details/:item-name" element={<ItemDetails />} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default RoutesApp