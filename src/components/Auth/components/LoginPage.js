/* Core */
import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
/* Components */
import { LoginForm } from "./LoginForm/LoginForm";
/* Navigation */
import { links } from "../../../navigation/config";

export const LoginPage = () => {
  //const { authenticated } = useSelector((state) => state.auth);
  //const { communityName } = useParams();

  // if (authenticated) {
  //   return <Redirect to={`/${communityName}/${links.dashboard}`} />;
  // }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      position="relative"
    >
      <LoginForm />
    </Box>
  );
};
