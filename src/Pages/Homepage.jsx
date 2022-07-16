import React from 'react'
import { Box, Heading, Text, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const Homepage = () => {
    return (
        <Box>
            <Heading as="h1" textAlign="center">Homepage</Heading>
            <Box>
                <Link as={RouterLink} to="/products" textAlign={"center"}>
                    <Text fontSize={"22px"} fontWeight="bold" color={"black"}
                    > Products</Text>
                </Link>
            </Box>

        </Box>
    )
}

export default Homepage