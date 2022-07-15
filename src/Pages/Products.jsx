import React, { useEffect } from 'react'
import {
    Box,
    Flex,
    Heading
} from "@chakra-ui/react"
import FilterComponent from '../Components/FilterComponent'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../Redux/products/action'
import { useSearchParams } from 'react-router-dom'
import ProductSimple from '../Components/ProductSimple'


const Products = () => {
    const products = useSelector((store) => { return store.ecommerceData.products })
    // console.log(products)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        if (products?.length === 0) {
            let params = {
                category: searchParams.getAll("category"),
            }
            dispatch(fetchData(params))
        }
    }, [dispatch, products?.length, searchParams])
    // console.log(products)

    return <>
        <Box>
            <Box>
                <FilterComponent />
            </Box>

            <Box>
                <Heading as="h3" align="center" m={2}>Products</Heading>
                <Flex flexWrap="wrap" justifyContent="space-around" >
                    {products.map((product) => {
                        return <ProductSimple
                            key={product.id} image={product.image}
                            title={product.title} price={product.price} />
                    })}
                </Flex>

            </Box>

        </Box>
    </>
}




export default Products