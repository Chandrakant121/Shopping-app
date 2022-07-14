import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Homepage from '../Pages/Homepage'
import Products from '../Pages/Products'
import Product from '../Pages/product'
import Orders from '../Pages/Orders'

const AllRoutes = () => {
    return <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders/' element={<Orders />} />
    </Routes>
}

export default AllRoutes