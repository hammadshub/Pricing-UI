import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import No1 from "./icons/No1";
import No2 from "./icons/No2";
import No3 from "./icons/No3";

export default function Traits() {
  return (
    <Box maxW={"800px"} m="auto" mt="57px" px="50px"fontWeight= "bold">
      <Flex direction={{ base: "column", lg: "row" }}>
        <HStack mb="20px">
          <Icon as={No1} />
          <Text>30 days money back Guarantee</Text>
        </HStack>

        <HStack mb="20px">
          <Icon as={No2} />
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>

        <HStack mb="20px">
          <Icon as={No3} />
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}