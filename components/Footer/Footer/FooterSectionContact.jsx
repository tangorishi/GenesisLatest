import { Box, Text } from '@chakra-ui/react';

const FooterSectionContact = ({ number, name, children }) => (
  <Box
    paddingBottom="8px"
  >
    <a
      href={`tel:${number}`}
      aria-label="id"
    >
      <Text
        color="white"
        size="sm"
        fontFamily="monospace"
        fontWeight="1000"
      >
        {children}
      </Text>
    </a>
    <Text
      color="white"
      size="sm"
      fontFamily="monospace"
      fontWeight="1000"
    >
      {name}
    </Text>
  </Box>
);

export default FooterSectionContact;
