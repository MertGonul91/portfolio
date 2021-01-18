import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Link,
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Divider,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { projects } from '../db/projects';
import MotionBox from '../components/MotionBox';

const Projects = () => {
  const [projectId, setProjectId] = useState(0);

  let name = projectId > 0 && projects.architecture[projectId - 1].name;

  return (
    <>
      <Container maxW='100vw' minW='auto'>
        <Flex direction='column' h='100vh'>
          <Header />
          <Spacer />
          <MotionBox
            exit={{ x: -2000 }}
            transition={{ duration: 1.1, ease: [0.87, 0, 0.13, 1] }}
          >
            <Flex justifyContent='space-between' direction='row' m='10px'>
              {projectId > 0 ? (
                <Flex justifyContent='center' alignItems='center' w='30vw'>
                  {name}
                </Flex>
              ) : (
                <Flex justifyContent='center' alignItems='center' w='30vw'>
                  This is my works
                </Flex>
              )}
              <Box w='50vw'>
                {projects.architecture.map((project) => (
                  <Link
                    key={project.key}
                    as={RouterLink}
                    to={`/${project.name}`}
                  >
                    <Flex
                      w='40vw'
                      h='12vh'
                      onMouseEnter={() => setProjectId(project.id)}
                      onMouseLeave={() => setProjectId(0)}
                      p='20px'
                      m='20px'
                      borderBottom='1px'
                      borderColor='ButtonHighlight'
                      alignItems='center'
                    >
                      <Text fontSize='1xl'>{`0${project.id}.`}</Text>
                      <Divider orientation='vertical' h='40px' ml='20px' />
                      <Spacer />
                      <Text fontSize='3xl'>{project.name}</Text>
                      <Spacer />
                    </Flex>
                  </Link>
                ))}
              </Box>
            </Flex>
          </MotionBox>
          <Spacer />
          <Footer />
        </Flex>
      </Container>
    </>
  );
};

export default Projects;
