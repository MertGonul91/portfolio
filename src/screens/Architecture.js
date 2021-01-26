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
  Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { projects } from '../db/projects';
import MotionBox from '../components/MotionBox';

const Projects = () => {
  const [projectId, setProjectId] = useState(0);

  let name = projectId > 0 && projects.architecture[projectId - 1].name;

  console.log(projectId > 0 && projects.architecture[projectId - 1].img);

  return (
    <>
      <MotionBox
        exit={{ x: -2000 }}
        transition={{ duration: 1.1, ease: [0.87, 0, 0.13, 1] }}
      >
        <Flex
          justifyContent='center'
          alignItems='center'
          direction='row'
          m='10px'
        >
          {projectId > 0 ? (
            <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Flex
                direction='column'
                justifyContent='center'
                alignItems='center'
                w='30vw'
              >
                <Image src={projects.architecture[projectId - 1].img}></Image>
                <Text>{name}</Text>
              </Flex>
            </MotionBox>
          ) : (
            <Flex justifyContent='center' alignItems='center' w='30vw'>
              This is my works
            </Flex>
          )}
          <Box w='50vw'>
            {projects.architecture.map((project) => (
              <Link key={project.key} as={RouterLink} to={`/${project.name}`}>
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
    </>
  );
};

export default Projects;
