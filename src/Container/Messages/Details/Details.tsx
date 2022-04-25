import React from 'react'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image
} from '@chakra-ui/react';

const Details = () => {
    return (
        <React.Fragment>
            <Center py={6}>
                <Box
                    maxW={'80%'}
                    w={'full'}
                    bg={"transparent"}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}>
                        <Image
                            src={
                                'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            }
                        />
                    </Box>
                    <Stack>
                        <Text>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum.
                        </Text>
                    </Stack>

                    <div className="Aminities">
                        <h2>Aminities</h2>
                        <ul>
                            <li>On private beach</li>
                            <li>Daily Housekeeping</li>
                            <li>Free With</li>
                            <li>Coffee/tea in common area</li>
                            <li>24h round trip airport shuttle</li>
                        </ul>
                    </div>

                    <div className="Faqs">
                        <h2>FAQ</h2>
                        <p>Check-in and Check-out</p>
                        <p>Check-in: 10AM</p>
                        <p>Check-out: 11AM</p>
                         <span>View More</span>
                    </div>

                </Box>
            </Center>
        </React.Fragment>
    )
}

export default Details