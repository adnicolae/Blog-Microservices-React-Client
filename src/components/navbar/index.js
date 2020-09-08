import React from "react";
import { Flex, Box, Image, Icons, Link, Text, Button } from "ucc-design-system";

const NavBar = () => {
  return (
    <>
      <Flex bg="monochrome.mineshaft" alignItems="center" height="5vh">
        <Link href="/" color="white" type="nav" ml={4}>MicroBlog</Link>
        <Box flex="1 1 auto" display={["block", "block", "block"]}>
          <Flex mr={[3, 4, 5]}>
            <Link variant="nav1" ml="auto" href="/">
              <Icons.Admin color="white" fontSize={5} />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  )
};

export default NavBar;
