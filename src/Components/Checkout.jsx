import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure, Image,
    useColorModeValue, Box, Flex, Text
} from '@chakra-ui/react'

export default function Checkout({ cart, checkoutHandler }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Button
                marginBottom="100px"
                rounded={'none'}
                w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
                bg={useColorModeValue('gray.900', 'gray.50')}
                color={useColorModeValue('white', 'gray.900')}
                textTransform={'uppercase'}
                _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                }} onClick={onOpen} >
                Checkout
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm Purchase</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {cart.map((product) => {
                            return (
                                <Box key={product.id} mb="1rem">
                                    <Flex>
                                        <Box>
                                            <Image src={product.image}
                                                border="1px solid black"
                                                rounded="lg"
                                                objectFit="contain"
                                                alt="product image"
                                                boxSize="100px" />
                                        </Box>
                                        <Box maxW="250px" ml="1rem">
                                            <Text fontSize="lg" >{product.title}</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            )
                        })}

                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={checkoutHandler}>
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}