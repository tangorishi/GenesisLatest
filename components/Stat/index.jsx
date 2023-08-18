import React from "react";
import { Box } from "@chakra-ui/react";
import StatGroup from "./StatGroup";
import { Show, Hide } from '@chakra-ui/react'
const Stat = () => {
  return (

     <Hide below='md'>
      <Box><StatGroup /></Box>


    </Hide> 
  );
};
