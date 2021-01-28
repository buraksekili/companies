import React from "react";
import { Box, Collapsible } from "grommet";
import AboutText from "./AboutText";

const AboutPageWeb = ({ showSidebar }) => {
  return (
    <Collapsible direction="horizontal" open={showSidebar}>
      <Box
        flex
        width="medium"
        background="light-2"
        elevation="small"
        align="center"
        justify="center"
      >
        <AboutText />
      </Box>
    </Collapsible>
  );
};

export default AboutPageWeb;
