import React from 'react'
import { Box, Text, Link, Button } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";


const Homepage = () => {
    return (
        <Box backgroundColor={"gray.700"}>
            {/* <Heading as="h1" textAlign="center">Homepage</Heading> */}
            <Box width={"140px"} margin="auto" >
                <Button marginTop="10px" backgroundColor={"yellow.400"}>
                    <Link as={RouterLink} to="/products" textAlign={"center"}>
                        <Text fontSize={"22px"} fontWeight="bold" color={"black"}
                        > Products</Text>
                    </Link>
                </Button>
            </Box>
            <Box w="100%" p={4} color="white" >
                <ImageSlider slides={SlideData} />
            </Box>

        </Box>
    )
}

export default Homepage