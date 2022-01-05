/* Core */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import Link from "@docusaurus/Link";
/* Components */
import CustomButton from "../Button";
import CustomSnackbar from "../Snakbar";
/* Hooks */
import { useAuth } from "../../Auth/hooks/useAuth";
import { useSession } from "./hooks/useSessions";
import { useHeader } from "./hooks/useHeader";
/* Config */
import { links } from "../../../navigation/config";

const useStyles = makeStyles((theme) => ({
  rootAppBar: {
    top: 0,
    boxShadow: (props) =>
      props.authenticated || props.rootPage ? theme.shadows[1] : "none",
    backgroundColor: (props) =>
      props.authenticated || props.rootPage
        ? theme.palette.neutral.white
        : "transparent",
    //zIndex: "99999",
  },
  rootToolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    minHeight: 76,
  },
  logoImg: { height: "33px" },
  title: {
    fontSize: "20px",
    fontWeight: "400",
    letterSpacing: "0.10000000149011612px",
    textAlign: "left",
    color: "#416EE6",
    padding: "0px 12px 6px",
  },
  betaTag: {
    padding: "5px 10px 5px 10px",
    borderRadius: "12px",
    fontSize: "8px",
    background: "#F2F3FD",
    color: "#7281E8",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signinBtn: {
    border: "1px solid #cbc8d3",
    backgroundColor: "#ffffff",
    color: theme.palette.secondary.light,
    marginRight: "20px",
  },
  gsBtn: {
    border: "1px solid #cbc8d3",
    backgroundColor: theme.palette.secondary.light,
    color: "#F7F9FA",
  },
}));

const Header = ({ isLogin, isRegister }) => {
  const { pathname, search } = useLocation();
  const { sessionIsReady } = useSession();
  const { handleSignIn, handleRegister } = useHeader();
  const { message, authenticated } = useAuth();
  const registerPage = pathname === `${links.register}`;
  const rootPage = pathname === `${links.root}`;
  const classes = useStyles({
    authenticated: authenticated,
    registerPage,
    rootPage,
  });
  console.log("message", message);
  const renderLogo = () => {
    return <img className={classes.logoImg} src={"img/logo.svg"} alt="logo" />;
  };

  if (isLogin && !isRegister) {
    return message ? (
      <CustomSnackbar message={message} />
    ) : (
      <CustomSnackbar message={message || ""} />
    );
  }

  return (
    <>
      {message && <CustomSnackbar message={message} />}
      {registerPage ? (
        <AppBar className={classes.rootAppBar}>
          <Toolbar>
            <Box className={classes.rootToolbar}>
              <Box className={classes.container}>
                <NavLink
                  to={{
                    pathname: `/devportal/`,
                    search,
                  }}
                  className={classes.link}
                >
                  {renderLogo()}
                </NavLink>
              </Box>
              <Box className={classes.container}>
                <Box width="141px" mr={4}>
                  <CustomButton
                    value="Have an account?"
                    className={"whiteButton"}
                    type="submit"
                    variant="outlined"
                    onClick={handleSignIn}
                  />
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar className={classes.rootAppBar}>
          <Toolbar>
            <Box className={classes.rootToolbar}>
              <Box className={classes.container}>
                <NavLink
                  to={{
                    pathname: `/devportal/`,
                    search,
                  }}
                  className={classes.link}
                >
                  {renderLogo()}
                </NavLink>
                <Typography className={classes.title}>Developer</Typography>
                <Typography className={classes.betaTag}>BETA</Typography>
              </Box>
              <Box className={classes.container}>
                <CustomButton
                  value="Sign In"
                  className={classes.signinBtn}
                  onClick={handleSignIn}
                />
                <CustomButton
                  value="Getting Started"
                  className={classes.gsBtn}
                  onClick={handleRegister}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

Header.propTypes = {
  isLogin: PropTypes.bool,
};

export default Header;
