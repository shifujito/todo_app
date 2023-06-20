import { Box, Button } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box as="header" height={'50px'} backgroundColor={'teal.900'}>
      <Button>Login</Button>
    </Box>
  );
};

export default Header;
