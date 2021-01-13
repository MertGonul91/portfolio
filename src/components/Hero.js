import React from 'react';
import {
  Image,
  Box,
  Flex,
  Text,
  Center,
  useMediaQuery,
} from '@chakra-ui/react';
import enfekte from '../img/Enfekte.gif';

const Hero = () => {
  const [desktop] = useMediaQuery('(min-width: 1280px)');
  const [mobile] = useMediaQuery('(max-width: 450px)');

  const about = "I'm Mert Gönül, a Full Stack Developer and an Architect";

  return (
    <>
      {desktop ? (
        <Flex direction='row' justifyContent='center'>
          <Center pos='relative' w='100px' boxSize='md'>
            <Image src={enfekte} />
            <Box pos='absolute' left='-350px' w='300px'>
              <Text fontSize='1rem'>{about}</Text>
            </Box>
          </Center>
        </Flex>
      ) : mobile ? (
        <Flex direction='column' justifyContent='center' alignItems='center'>
          <Box w='250px' m='30px'>
            <Text fontSize='1rem'>{about}</Text>
          </Box>
          <Center w='150px'>
            <Image src={enfekte} />
          </Center>
        </Flex>
      ) : (
        <Flex direction='column' justifyContent='center' alignItems='center'>
          <Box w='300px' m='60px'>
            <Text fontSize='1rem'>{about}</Text>
          </Box>
          <Center w='100px' boxSize='sm'>
            <Image src={enfekte} />
          </Center>
        </Flex>
      )}
    </>
  );
};

export default Hero;