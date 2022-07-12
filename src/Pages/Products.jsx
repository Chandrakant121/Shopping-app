import React, { useEffect } from 'react'
import { Box } from "@chakra-ui/react"
import FilterComponent from '../Components/FilterComponent'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../Redux/products/action'


const Products = () => {
    const products = useSelector((store) => { return store.ecommerceData.products })
    // console.log(products)
    const dispatch = useDispatch()

    useEffect(() => {
        if (products?.length === 0) {
            dispatch(fetchData())
        }
    }, [dispatch, products?.length])
    console.log(products)

    return <>
        <Box>
            <Box>
                <FilterComponent />
            </Box>

            <Box>
                {/* Products */}
            </Box>

        </Box>
    </>
}

export default Products