import React, { useEffect, useState } from 'react'
import { Box, Text } from "@chakra-ui/react"
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { fetchData } from '../Redux/products/action'
import { useDispatch } from 'react-redux'

const FilterComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const [categoryValues, setCategoryValues] = useState(searchParams.getAll("category") || [])

    const categoryHandler = (values) => {
        console.log(values)
        setCategoryValues(values)
    }
    useEffect(() => {
        if (categoryValues) {
            setSearchParams({ category: categoryValues }, { replace: true })
            let params = {
                category: searchParams.getAll("category")
            }
            dispatch(fetchData(params))
        }
    }, [categoryValues, setSearchParams, searchParams])

    return (
        <Box>
            <Box>
                <Text fontSize="2xl" align="center" fontWeight="bold" marginTop={2} >Filters</Text>
                <Text align="center" fontWeight="bold" margin={2} >Category</Text>
                <CheckboxGroup colorScheme='green' defaultValue={categoryValues} onChange={categoryHandler}>
                    <Stack spacing={[1, 5]} direction={['column', 'row']} justifyContent="space-around" fontWeight="bold" >
                        <Checkbox value="men's clothing">Men's</Checkbox>
                        <Checkbox value="women's clothing">Women's</Checkbox>
                        <Checkbox value="jewelery">Jewelery</Checkbox>
                        <Checkbox value="electronics">Electronics</Checkbox>
                        <Checkbox value='bags'>Bags</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </Box>
        </Box >
    )
}

export default FilterComponent
