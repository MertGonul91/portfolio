import React, { useState } from 'react';
import {
  Link,
  Box,
  Flex,
  Spacer,
  Text,
  Divider,
  useMediaQuery,
} from '@chakra-ui/react';

import { projects } from '../db/projects';
import MotionBox from '../components/MotionBox';

const Projects = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');
  const [projectId, setProjectId] = useState(0);
  const [surprise, setSurprise] = useState(false);

  let selected = projectId > 0 && projects.webdev[projectId - 1];

  console.log(projectId > 0 && projects.webdev[projectId - 1].img);

  const clickHandler = (e) => {
    setSurprise(true);
    setTimeout(() => {
      setSurprise(false);
    }, 1500);
    e.preventDefault();
  };

  return (
    <>
      <MotionBox
        exit={{ x: -2000 }}
        transition={{ duration: 1.1, ease: [0.87, 0, 0.13, 1] }}
      >
        {mobile ? (
          <Box w='50vw'>
            {projects.webdev.map((project) => (
              <Link
                key={project.key}
                href={project.link}
                onClick={project.id === 3 && clickHandler}
                isExternal
              >
                <Flex
                  w='90vw'
                  h='12vh'
                  onMouseEnter={() => setProjectId(project.id)}
                  onMouseLeave={() => setProjectId(0)}
                  p='20px'
                  m='20px'
                  alignItems='center'
                  textAlign='center'
                >
                  <Text fontSize='1rem'>{`0${project.id}.`}</Text>
                  <Divider orientation='vertical' h='40px' ml='20px' />
                  <Spacer />
                  <Text fontSize='1rem'>
                    {surprise ? (
                      <MotionBox
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 350 }}
                      >
                        <Text fontSize='0.8rem'>
                          surprise! you are already in it.
                        </Text>
                      </MotionBox>
                    ) : (
                      <>
                        <Flex direction='column'>
                          <Text fontSize='0.8rem'>{project.name}</Text>
                          <Text fontSize='0.6rem'>
                            {project.description.header}
                          </Text>
                          <Text fontSize='0.6rem'>
                            {project.description.tech}
                          </Text>
                        </Flex>
                      </>
                    )}
                  </Text>
                  <Spacer />
                </Flex>
                <Divider w='40vw' />
              </Link>
            ))}
          </Box>
        ) : (
          <Flex justifyContent='center' alignItems='center' direction='row'>
            {projectId > 0 ? (
              <Flex
                justifyContent='center'
                alignItems='center'
                w='40vw'
                direction='column'
                textAlign='center'
              >
                <Text fontSize='3xl' m='10px'>
                  {selected.name}
                </Text>
                <Text fontSize='2xl' m='5px'>
                  {selected.description.header}
                </Text>
                <Text m='5px'>{selected.description.tech}</Text>
                <Text m='5px'>{selected.link}</Text>
              </Flex>
            ) : (
              <Flex justifyContent='center' alignItems='center' w='40vw'>
                These are my projects.
              </Flex>
            )}
            <Box w='50vw'>
              {projects.webdev.map((project) => (
                <Link
                  key={project.key}
                  href={project.link}
                  onClick={project.id === 3 && clickHandler}
                  isExternal
                >
                  <Flex
                    w='40vw'
                    h='12vh'
                    onMouseEnter={() => setProjectId(project.id)}
                    onMouseLeave={() => setProjectId(0)}
                    p='20px'
                    m='20px'
                    alignItems='center'
                  >
                    <Text fontSize='1xl'>{`0${project.id}.`}</Text>
                    <Divider orientation='vertical' h='40px' ml='20px' />
                    <Spacer />
                    <Text fontSize='3xl'>
                      {surprise ? (
                        <MotionBox
                          initial={{ scale: 0 }}
                          animate={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 350 }}
                        >
                          <Text>surprise! you are already in it.</Text>
                        </MotionBox>
                      ) : (
                        project.name
                      )}
                    </Text>
                    <Spacer />
                  </Flex>
                  <Divider w='40vw' />
                </Link>
              ))}
            </Box>
          </Flex>
        )}
      </MotionBox>
    </>
  );
};

export default Projects;
