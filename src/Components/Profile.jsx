import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Button,
    Avatar, Link
} from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"

const Profile = () => {
    return (
        <Flex>
            <Menu>
                <MenuButton as={Button}
                    rounded="full"
                    variant="link"
                    cursor="pointer"
                    minW={0}
                >
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </MenuButton>
                <MenuList>
                    <Link to="/cart" as={RouterLink}>
                        <MenuItem>Cart</MenuItem>
                    </Link>

                    <Link to="/orders" as={RouterLink}>
                        <MenuItem>Your Orders</MenuItem>
                    </Link>

                    <Link to="/login" as={RouterLink}>
                        <MenuItem>Login</MenuItem>
                    </Link>

                    <Link to="/logout" as={RouterLink}>
                        <MenuItem>Logout</MenuItem>
                    </Link>


                </MenuList>
            </Menu>
        </Flex>
    )
}

export default Profile