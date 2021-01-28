import React from "react";
import { Text, Anchor } from "grommet";

const AboutText = () => {
  return (
    <Text textAlign="center" margin="medium">
      Organization Finder is a simple app that allows you to search for
      organizations on GitHub based on the language they use.
      <br />
      You can check the
      <Anchor margin="xsmall" href="https://github.com/buraksekili/companies">
        GitHub repository for the source code.
      </Anchor>
    </Text>
  );
};

export default AboutText;
