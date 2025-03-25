import { Box,Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box>
        <Text>Welcome to kids learning platform</Text>
        <Button as={Link} to='/lessons' mt={4} colorScheme="blue">
            Start Learning
        </Button>
    </Box>
  )
}

export default Home