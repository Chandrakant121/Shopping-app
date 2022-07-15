import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchOrders } from '../Redux/products/action'

const Orders = () => {
    const dispatch = useDispatch()
    const orders = useSelector((store) => { return store.ecommerceData.orders })
    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])
    console.log(orders)
    return (
        <Box>
            <Heading as="h2" size="xl" textAlign="center">
                Your Orders
            </Heading>
        </Box>
    )
}

export default Orders