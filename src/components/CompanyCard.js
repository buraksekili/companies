import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
  Box,
} from "grommet";
import { Github } from "grommet-icons";

const CompanyCard = ({ companyURL, login, avatarURL }) => {
  return (
    <Box height={{ min: "auto" }} width="small">
      <Card margin="xsmall" height="medium" width="small" background="light-1">
        <CardHeader justify="center" pad="medium">
          {login}
        </CardHeader>
        <CardBody pad="medium">
          <Image fit="contain" src={avatarURL} />
        </CardBody>
        <CardFooter
          justify="center"
          pad={{ horizontal: "small" }}
          background="light-2"
        >
          <Button icon={<Github />} hoverIndicator />
        </CardFooter>
      </Card>
    </Box>
  );
};

export default CompanyCard;
