import { Heading, transition } from '@chakra-ui/react';

const FooterSectionHeading = ({ children }) => (
  <Heading
    color="white"
    size="sm"
    fontFamily="monospace"
    fontWeight={1000}
    
  >
    {children}
  </Heading>
);

export default FooterSectionHeading;
