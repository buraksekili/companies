import React from "react";
import AppBar from "./AppBar";
import { Box, Button, Heading } from "grommet";
import { Help, Github } from "grommet-icons";

const Header = ({ setShowSidebar, showSidebar }) => {
  return (
    <AppBar>
      <Heading level={3} margin="none">
        Organization finder
      </Heading>
      <Box direction="row">
        <Button
          icon={<Github />}
          margin="0px"
          target="blank"
          href="https://github.com/buraksekili/companies"
        />
        <Button icon={<Help />} onClick={() => setShowSidebar(!showSidebar)} />
      </Box>
    </AppBar>
  );
};

export default Header;
