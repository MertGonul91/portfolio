import React from 'react';
import { Button, useColorMode, Text, useMediaQuery } from '@chakra-ui/react';

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mobile] = useMediaQuery('(max-width: 450px)');
  return (
    <>
      {mobile ? (
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? (
            <Text fontSize='xs'>nighty</Text>
          ) : (
            <Text fontSize='xs'>sunny</Text>
          )}
        </Button>
      ) : (
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <Text>nighty</Text> : <Text>sunny</Text>}
        </Button>
      )}
    </>
  );
};

export default DarkMode;
