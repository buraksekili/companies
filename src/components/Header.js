import React from "react";
import AppBar from "./AppBar";
import { Button, Heading } from "grommet";
import { Help } from "grommet-icons";

const Header = ({ setShowSidebar, showSidebar }) => {
  return (
    <AppBar>
      <Heading level={3} margin="none">
        Organization finder
      </Heading>
      <Button icon={<Help />} onClick={() => setShowSidebar(!showSidebar)} />
    </AppBar>
  );
};

export default Header;
