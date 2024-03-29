import React from 'react'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Link,
    Icon, Heading, Button
} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom"
import { BsCart3 } from "react-icons/bs"

import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';

import Profile from './Profile';
import CartCounter from './CartCounter';


const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}


                // position="fixed"
                // top={0}
                // w="full"
                // overflowY="hidden"
                transition="box-shadow 0.2s"
                backgroundColor={"yellow.400"}
                border="2px solid white"
                height={"70px"}
                borderBottomWidth={2}
            >

                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Link as={RouterLink} to="/">
                        <Heading color={"black"}
                            as="h1"> E-Shop</Heading>
                    </Link>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        {/* <DesktopNav /> */}
                    </Flex>
                </Flex>
                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>

                    <Link as={RouterLink} to="/cart">
                        <Box position="relative" padding="0 0.5rem ">
                            <CartCounter />
                            <Icon as={BsCart3} boxSize="2rem" />
                        </Box>
                    </Link>
                    <Profile />
                </Stack>
            </Flex>


            <Collapse in={isOpen} animateOpacity>
                {/* <MobileNav /> */}
            </Collapse>
        </Box>
    );
}

export default Navbar