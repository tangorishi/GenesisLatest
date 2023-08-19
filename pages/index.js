import Events from "../components/Events";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer/index";
// import Typewriter from 'typewriter-effect';


import {
  ChakraProvider,
  Text,
  Code,
  Stack,
  Flex,
  theme,
  Button,
  Box,
  useDisclosure,
  Hide,
  Heading,
  Show,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Head from 'next/head';
import Stat from "../components/Stat";
import Timeline from "../components/Timeline";
import Speaker from "../components/Speaker"
import FadeInUp from "../components/Anim/FadeInUp";
 { /*import FadeInUp from "../components/Anim/FadeInUp"; */}
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>GENESIS - IEEE MUJ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Box>
        <video
          className="videolc"
          id="bg-video"
          autoPlay={true}
          muted={true}
          loop={false}
          playsInline={true}
        >
          <source
          src="https://prismic-io.s3.amazonaws.com/ieeemuj/cf941ee8-de26-4688-a5cf-f46fc36e093d_genesis-new.mp4"
            // src="https://video-previews.elements.envatousercontent.com/h264-video-previews/8bc2eb2a-6288-46a0-9873-b1ffeefc00dd/37359639.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
      <Box className="modalbox">
        <Button
          className="modalbtn"
          bottom={"10vh"}
          left={["27%", "37%", "45%"]}
          zIndex={"5"}
          position={"fixed"}
          onClick={onOpen}
        >
          Watch Promo Video
        </Button>

        <Modal className="modalbox" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Genesis Trailer</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <video
                autoPlay={true}
                loop={true}
                playsInline={true}
                controls={true}
              >
                <source
                  src="https://video-previews.elements.envatousercontent.com/h264-video-previews/8bc2eb2a-6288-46a0-9873-b1ffeefc00dd/37359639.mp4"
                  type="video/mp4"
                />
              </video>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Register NOW</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
       { /*<FadeInUp> */}
       {/* <Stack minH={"10vh"} direction={{ base: "column", md: "row" }}></Stack> */}
       <Show below="md">
       <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} backgroundColor={"#080c2c"}>
       <Flex p={8} flex={1} align={"center"} >
            <Stack spacing={6} w={"full"} align={"center"}>
              {/* <FadeInUp> */}
               {/* <Heading as="h1" size="xl" textAlign={"center"} fontWeight={"bold"} textColor={"white"}>Largest Tech Fest of MUJ</Heading> */}
               <Text textAlign={"center"} fontWeight={"bold"} textColor={"white"} fontSize={"3xl"}>Largest Tech Fest of MUJ</Text>
               <Text textAlign={"center"} fontWeight={"bold"} textColor={"white"} fontSize={"4xl"}>Trippin' on Tech</Text>
               {/* <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/> */}
               {/* <Heading as="h6" size="xl" textAlign={"center"} fontWeight={"bold"} textColor={"white"}>Largest Tech </Heading> */}
               {/* </FadeInUp> */}
            </Stack>
          </Flex>
       </Stack>
       </Show>
       <Hide below="md">
       <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}></Stack>
        <Stat />
        </Hide>
        <Box bgColor={"white"}>
          <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                letterSpacing={5.5}
                backgroundColor={"#fff"}
                color={"black"}
                textAlign={"center"}
                padding={"3rem 0 0.1rem 0"}><b>Our Events</b></Text>
        <Timeline />
        </Box>
        <Stack>
       { /* <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                letterSpacing={5.5}
                backgroundColor={"#fff"}
                color={"black"}
                textAlign={"center"}
            padding={"3rem 0 0.1rem 0"}><b>Past IEEE Events</b></Text> */}
          <Events />
        </Stack>
        {/* <Speaker/> */}
        {/*  </FadeInUp> */}
      <Footer />
    </ChakraProvider>
  );
}
