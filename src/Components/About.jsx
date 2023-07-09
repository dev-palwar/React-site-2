import React from 'react';
import { Stack, HStack, VStack, Box, Heading, Text } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";
import img5 from '../assets/5.png'

const About = () => {
  return (
    <>
      <HStack justifyContent={'space-evenly'} height='100vh'>
        <Box maxW='sm' overflow='hidden'>
            <Image src={img5} alt="" />
        </Box>
        <Box className="about-info" width='50rem' fontSize={24}> 
            <Heading borderBottom='3px solid purple' lineHeight='2' fontSize='50px' fontFamily=''>About</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nam tempora explicabo quod obcaecati beatae eum, quasi neque ab provident, tenetur assumenda dolorem maiores placeat, labore aperiam possimus officiis ipsum fugiat deleniti tempore ratione nostrum. Dolorum nihil labore magni deleniti.</Text>
        </Box>
      </HStack>
    </>
  );
};

export default About;