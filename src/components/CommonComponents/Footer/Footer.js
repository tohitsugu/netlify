/* Core */
import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
/* Hooks */
import { useAuth } from "../../Auth/hooks/useAuth";
const useStyles = makeStyles((theme) => ({
  typographyOverrides: {
    alignItems: "center",
    textAlign: "center",
    color: (props) =>
      props.authenticated
        ? theme.palette.secondary.main
        : theme.palette.neutral.white,
    fontSize: "10px",
    userSelect: "none",
    background: (props) =>
      props.authenticated
        ? theme.palette.neutral.white
        : theme.palette.secondary.main,
    marginLeft: (props) => (props.authenticated ? "264px" : "0px"),
    height: "72px",
    zIndex: "1",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    fontSize: "14.5px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px !important",
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: "65px !important",
    },
  },
}));

export const Footer = () => {
  const { authenticated } = useAuth();
  const classes = useStyles({ authenticated });

  return (
    <Box
      height="auto"
      width="100%"
      flex="0 0 auto"
      zIndex="1"
      position="fixed"
      bottom="0"
    >
      <Typography
        variant="body2"
        className={`${classes.typographyOverrides} paragraph`}
      >
        ©{new Date().getFullYear()} 1Kosmos Inc., All Rights Reserved. | Privacy
        Policy | Cookie Policy
      </Typography>
    </Box>
  );
};
