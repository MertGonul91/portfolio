import React, { useState } from 'react';
import {
  Link,
  Box,
  Flex,
  Spacer,
  Text,
  Divider,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { projects } from '../db/projects';
import MotionBox from '../components/MotionBox';

const Projects = () => {
  const [mobile] = useMediaQuery('(max-width: 450px)');
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
          direction={mobile ? 'column' : 'row'}
        >
          {projectId > 0 ? (
            <MotionBox
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              <Flex
                direction='column'
                justifyContent='center'
                alignItems='center'
                w='40vw'
                position='relative'
              >
                {mobile || (
                  <Image
                    m='20px'
                    src={projects.architecture[projectId - 1].img}
                  />
                )}
                <MotionBox
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.8 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  exit={{ opacity: 0 }}
                  overflow='hidden'
                  position='absolute'
                  top='20px'
                  left='20px'
                >
                  {mobile || (
                    <Text color='white' fontStyle='oblique' fontSize='2rem'>
                      {name}
                    </Text>
                  )}
                </MotionBox>
              </Flex>
            </MotionBox>
          ) : (
            <Flex
              justifyContent='center'
              alignItems='center'
              w={mobile ? '90vw' : '40vw'}
              direction='column'
            >
              <Text fontSize={mobile ? '0.75rem' : '1rem'}>
                These are some of my projects.
              </Text>
              <Link href='/cva.pdf' isExternal>
                <Text fontSize={mobile ? '0.75rem' : '1rem'}>
                  Click here to see more of my architectural history.
                </Text>
              </Link>
            </Flex>
          )}

          <Box w={mobile ? '90vw' : '50vw'}>
            {projects.architecture.map((project) => (
              <Link key={project.key} href={project.link} isExternal>
                <Flex
                  w={mobile ? '90vw' : '40vw'}
                  h={mobile ? '6vh' : '12vh'}
                  onMouseEnter={() => setProjectId(project.id)}
                  onMouseLeave={() => setProjectId(0)}
                  p='20px'
                  m='20px'
                  alignItems='center'
                >
                  <Text
                    fontSize={mobile ? '0.7rem' : '1xl'}
                  >{`0${project.id}.`}</Text>
                  <Divider
                    orientation='vertical'
                    h={mobile ? '6vh' : '40px'}
                    ml='20px'
                  />
                  <Spacer />
                  <Text fontSize={mobile ? '0.7rem' : '3xl'}>
                    {project.name}
                  </Text>
                  <Spacer />
                </Flex>
                <Divider w='40vw' />
              </Link>
            ))}
          </Box>
        </Flex>
      </MotionBox>
    </>
  );
};

export default Projects;
