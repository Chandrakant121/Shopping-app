import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ProductSimple from '../Components/ProductSimple'
import { fetchOrders } from '../Redux/products/action'

const Orders = () => {
    const dispatch = useDispatch()

//useSelector is a function that takes the current state as an argument & returns
//whatever data you want from it

// It allows you to store the data ypu want inside the variable within the scope.

    const orders = useSelector((store) => { return store.ecommerceData.orders })

    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])
    // console.log(orders)
    return (
        <Box>
            <Heading as="h2" size="xl" textAlign="center">
                Your Orders
            </Heading>
            <Box>
                {orders.map((product) => {
                    return <ProductSimple key={product.id}
                        image={product.image} title={product.title} price={product.price}
                    />
                })}
            </Box>
        </Box>
    )
}

export default Orders