import React from "react";
import { Button, Box, Layer } from "grommet";
import { FormClose } from "grommet-icons";
import AboutText from "./AboutText";

const AboutPageMobile = ({ setShowSidebar }) => {
  return (
    <Layer>
      <Box
        background="light-2"
        tag="header"
        justify="end"
        align="center"
        direction="row"
      >
        <Button
          icon={<FormClose size="large" />}
          onClick={() => setShowSidebar(false)}
        />
      </Box>

      <Box
        flex
        background="light-2"
        elevation="small"
        align="center"
        justify="center"
      >
        <AboutText />
      </Box>
    </Layer>
  );
};

export default AboutPageMobile;
