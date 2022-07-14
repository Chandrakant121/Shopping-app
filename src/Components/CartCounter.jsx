import React, { useEffect } from 'react'
import { Box } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchCart } from '../Redux/products/action'

const CartCounter = () => {
    const cart = useSelector((store) => {
        return store.ecommerceData.cart
    })
    const dispatch = useDispatch()

    useEffect(() => {
        if (cart?.length === 0) {
            dispatch(fetchCart())
        }
    }, [cart?.length, dispatch])


    return (
        <Box textColor="white" backgroundColor="black" borderRadius={"50%"} width="20px" height="20px" textAlign="center" paddingBottom="25px" position="absolute" right="0" top="0" >
            {
                cart?.length ? cart.length : 0
            }
        </Box>
    )
}

export default CartCounter