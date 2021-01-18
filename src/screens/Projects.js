import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';

import { projects } from '../db/projects';

const Projects = () => {
  const [projectId, setProjectId] = useState(0);

  let name = projectId > 0 && projects.webdev[projectId - 1].name;

  return (
    <>
      <Container maxW='100vw' minW='auto'>
        <Flex direction='column' h='100vh'>
          <Header />
          <Spacer />
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
              {projects.webdev.map((project) => (
                <Flex
                  w='40vw'
                  h='15vh'
                  key={project.key}
                  onMouseEnter={() => setProjectId(project.id)}
                  onMouseLeave={() => setProjectId(0)}
                  _hover={{
                    background: 'black',
                    color: 'mediumturquoise',
                  }}
                  p='20px'
                  m='20px'
                  border='1px'
                  borderColor='ButtonHighlight'
                  alignItems='center'
                >
                  <Text>{`0${project.id}.`}</Text>
                  <Spacer />
                  <Text fontSize='2xl'>{project.name}</Text>
                </Flex>
              ))}
            </Box>
          </Flex>
          <Spacer />
          <Footer />
        </Flex>
      </Container>
    </>
  );
};

export default Projects;
