import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import NextImage from "next/image";
import FadeInUp from "../../Anim/FadeInUp";
import ResponsiveContainer from "../ResponsiveContainer";
import FooterSection from "./FooterSection";
import FooterSectionContact from "./FooterSectionContact";
import FooterSectionHeading from "./FooterSectionHeading";
import FooterSectionLink from "./FooterSectionLink";
import FooterSectionSocialIcon from "./FooterSectionSocialIcon";
import FooterSectionSocialLink from "./FooterSectionSocialLink";
import NextLink from "../../NextLink";
import genesisLogo from "../../../pages/public/imgs/genesis-logo-only.png";
import ieeeLogo from "../../../pages/public/imgs/logo.png";
import ieeecsLogo from "../../../pages/public/imgs/ieeecs.svg";
import ieeewieLogo from "../../../pages/public/imgs/ieeewie.svg";
import ieeerasLogo3 from "../../../pages/public/imgs/ieeerasLogo3.png";
const Footer = () => (
  <>
    <Box
      bgColor="#080c2c"
      width="100%"
      backgroundImage="url(/svg/footer.svg)"
      backgroundAttachment="fixed"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      paddingTop="50px"
      paddingBottom="20px"
    >
      <FadeInUp>
        <ResponsiveContainer>
          <Stack
            direction={["column", "column", "column", "column", "row"]}
            columns={[1, 1, 1, 1, 3]}
            width="100%"
            alignItems="flex-start"
            justifyItems="center"
            spacing="48px"
          >
            <VStack width={["100%", "100%", "100%", "100%", "100%"]}>
              <HStack>
                <NextImage src={genesisLogo} alt="Genesis Logo" height={300} width={250}/>
                <NextImage src={ieeeLogo} alt="IEEE SB MUJ Logo" height={150} width={450}/>
                <NextImage src={ieeecsLogo} alt="IEEE CS Logo" height={150} width={450}/>
                <NextImage src={ieeewieLogo} alt="IEEE WIE Logo" height={180} width={200}/>
                <NextImage src={ieeerasLogo3} alt="IEEE RAS LOGO" height={140} width={300}/>
              </HStack>

              <HStack width="100%" height="100px">
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/genesismuj"
                  underline
                >
                  Genesis 
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/genesismuj"
                  underline
                >
                    IEEE RAS
                 </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/genesismuj"
                  underline
                > 
                  IEEE WIE
                </FooterSectionSocialLink>
                <FooterSectionSocialLink
                  icon={<FooterSectionSocialIcon icon={FaInstagram} />}
                  href="https://www.instagram.com/genesismuj"
                  underline
                >
                  IEEE SB
                </FooterSectionSocialLink>
              </HStack>
            </VStack>
            <VStack width="100%" spacing={10}>
  <FooterSection>
    <FooterSectionHeading>Contact Us</FooterSectionHeading>
    <HStack spacing={10}>
      <FooterSectionContact number="+919721490618" name="Sriansh Raj">
        +91 97214 90618
      </FooterSectionContact>
      <FooterSectionContact number="+919111008100" name="Sonakshi Arora">
        +91 91110 08100
      </FooterSectionContact>
    </HStack>
    <HStack spacing={10}>
      <FooterSectionContact number="+918920287032" name="Yuvraj Vasudeva">
        +91 89202 87032
      </FooterSectionContact>
      <FooterSectionContact number="+919427596868" name="Dev Agrawal">
        +91 94275 96868
      </FooterSectionContact>
    </HStack>
    {/* <FooterSectionLink href="mailto:ieee@muj.manipal.edu">
      Email Us
    </FooterSectionLink> */}
  </FooterSection>
</VStack>


<VStack width="100%" spacing={10}>
  <FooterSection>
    <FooterSectionHeading>
      <NextLink color="white" to="http://jaipur.manipal.edu/">
        MUJ Official Website
      </NextLink>
    </FooterSectionHeading>
    <FooterSectionHeading>
      <NextLink color="white" to="http://www.ieeemuj.com">
        IEEE SB MUJ Website
      </NextLink>
    </FooterSectionHeading>
    <FooterSectionHeading>
      <NextLink color="white" to="https://cs.ieeemuj.com/">
        IEEE CS MUJ Website
      </NextLink>
    </FooterSectionHeading>
    <FooterSectionHeading>
      <NextLink color="white" to="https://wie.ieeemuj.com/">
        IEEE WIE MUJ Website
      </NextLink>
    </FooterSectionHeading>
  </FooterSection>
</VStack>

          </Stack>
        </ResponsiveContainer>
      </FadeInUp>
    </Box>
  { /* <Flex
      bgColor="#080c2c"
      width="100%"
      height="32px"
      textAlign="center"
      justifyItems="center"
      alignItems="center"
      color="white"
      fontWeight="bold"
      fontFamily="monospace"
    >
      <Text width="100%" fontSize="sm">
        MADE WITH ❤️ USING OPEN SOURCE
      </Text>
    </Flex> */ }
  </>
);

export default Footer;