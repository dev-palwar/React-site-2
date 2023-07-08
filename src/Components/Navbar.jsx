import React from 'react';
import { Stack, HStack, VStack, Box } from '@chakra-ui/react';
import Hamburger from 'hamburger-react';

import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();

  return (
    <>
      <Hamburger size={30} onToggle={onOpen}  />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Videos world</DrawerHeader>

          <DrawerBody>
            <VStack spacing={3} alignItems={'flex-start'}>
              <Button
                // onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
              <Link to={'/'}>Home</Link>
              </Button>
              <Button
                // onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button
                // onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
              <Link to={'/about'}>About</Link>
              </Button>
              <Button
                // onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                Upload
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
