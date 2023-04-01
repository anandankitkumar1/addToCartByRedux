
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cards from '../components/Cards'
import CardsDetails from '../components/CardsDetails'
export default function myRoutes() {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<Cards/>} />
            <Route path='/cart/:id' element={<CardsDetails/>} />
        </Routes>
    </div>
  )
}
