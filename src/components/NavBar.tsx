import { Box, Link, Flex } from "@chakra-ui/layout";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex bg="tomato" padding={4}>
      <Box marginLeft={"auto"}>
        <NextLink href="/login">
          <Link marginRight={2}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
