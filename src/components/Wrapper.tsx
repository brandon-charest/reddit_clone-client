import { Box } from "@chakra-ui/react";
import React from "react";

interface WrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxWidth={variant === "regular" ? "800px" : "400px"}
      width="100%"
      marginTop={8}
      marginX="auto"
    >
      {children}
    </Box>
  );
};
