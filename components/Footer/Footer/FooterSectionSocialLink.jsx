import { Box, Text } from '@chakra-ui/react';
import styles from '../../../styles/Navbar.module.css';

const FooterSectionSocialLink = ({
  icon, underline, href, children,
}) => (
  <Box
    width="65%"
    textAlign="centre"
  >
    {icon}
    <a
      className={underline ? styles.underLineAnimation : ''}
      href={href}
      aria-label="id"
      target="_blank"
      rel="noreferrer"
    >
      <Text
        color="lightblue"
        fontWeight="sm"
        size="sm"
        fontFamily="monospace"
      >
        {children}
      </Text>
    </a>
  </Box>
);

export default FooterSectionSocialLink;
