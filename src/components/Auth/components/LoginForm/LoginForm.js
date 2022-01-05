/* Core */
import React from "react";
import { isMobile } from "react-device-detect";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
/* Components */
//import { Footer } from "components/Footer";
import { AppLoading } from "../../../CommonComponents/AppLoading";
import { QRCodeTab } from "./QRCodeTab";
//import { UserNameTab } from "./UserNameTab/UserNameTab";
/* Hooks */
import { useAuth } from "../../hooks/useAuth";
import { usePasswordLess } from "../../hooks/usePasswordLess";
//import { useFidoLogin } from "../../hooks/useFidoLogin";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    padding: "48px 0",
    height: (props) => props.containerHeight,
    marginBottom: "20px",
    boxShadow: "0px 16px 32px rgba(0, 37, 86, 0.1)",
  },
  container: {
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "calc(460px - 5%)",
    },
  },
  tabsLabel: {
    color: (props) => `#${props?.brandingSettings?.heading_text_color}`, // theme.palette.secondary.main
    marginBottom: "12px",
    userSelect: "none",
  },
  tabsContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10%",
    },
  },
  formContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
  },
  tab: {
    border: "none",
    textTransform: "uppercase",
    color: theme.palette.neutral[400],
    padding: "6px",
    cursor: "pointer",
    backgroundColor: "transparent",
    userSelect: "none",
    fontWeight: theme.palette.fontWeightSemiBold,
    letterSpacing: "1.6px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.75rem",
      padding: "6px 10px",
    },
  },
  active: {
    color: (props) => `#${props?.brandingSettings?.active_tab_text_color}`, //"#EE0000"
  },
  appsTitle: {
    fontSize: "0.875rem",
    color: theme.palette.secondary.light,
    userSelect: "none",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  },
  appsLink: {
    color: (props) => `#${props?.brandingSettings?.links_color}`, //"#1C89B6"
    marginLeft: "20px",
    textDecoration: "none",
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  slide: {
    height: "100%",
    "&>div": {
      height: "100%",
    },
  },
  paperWrapper: {
    width: "100%",
    maxWidth: 327,
    [theme.breakpoints.up("lg")]: {
      maxWidth: 402,
    },
  },
  logoImg: { height: "33px" },
  loginLogo: {
    display: "flex",
    justifyContent: "center",
    userSelect: "none",
  },
}));

export const LoginForm = () => {
  const {
    sessionIsReady,
    authenticated,
    communityName,
    userInfo,
    setUserInfo,
    isLoading,
    loadingSession,
    brandingSettings,
  } = useAuth();

  const { QRValue, toggleAuthOption, index } = usePasswordLess({
    userInfo,
    setUserInfo,
    authenticated,
  });

  let containerHeight = isMobile ? 400 : 500;

  const classes = useStyles({ containerHeight, userInfo, brandingSettings });
  // console.log("sessionIsReady", sessionIsReady);
  // console.log("loadingSession", loadingSession);
  if (!sessionIsReady || loadingSession) {
    return <AppLoading />;
  }

  const renderLogo = () => {
    return brandingSettings?.community_logo_img ? (
      <Box className={classes.loginLogo}>
        <img
          className={classes.logoImg}
          src={brandingSettings?.community_logo_img}
          alt="logo"
        />
      </Box>
    ) : (
      <></>
    );
  };

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} sm={12}>
        <Box className={classes.tabsContainer}>
          <Box className={classes.formContainer}>
            <Typography variant="h1" className={classes.tabsLabel}>
              Sign in
            </Typography>
            <Box className={classes.paperWrapper}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pb="27px"
              >
                <div className={classes.tabsWrapper}></div>
              </Box>
              <Paper className={classes.root}>
                <SwipeableViews
                  index={index}
                  onChangeIndex={(idx) => {
                    if (idx < 2) {
                      toggleAuthOption(idx);
                    }
                  }}
                  className={classes.slide}
                >
                  <QRCodeTab
                    renderLogo={renderLogo}
                    communityName={communityName}
                    sessionValue={QRValue}
                    brandingSettings={brandingSettings}
                  />
                </SwipeableViews>
              </Paper>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb="10px"
                position="relative"
                zIndex="1"
              >
                <Typography
                  variant="body1"
                  className={classes.appsTitle}
                  component="div"
                >
                  Don’t have the app?
                </Typography>

                <a
                  href="https://apps.apple.com/us/app/blockid/id1539421428"
                  title="https://apps.apple.com/us/app/blockid/id1539421428"
                  target="blank"
                  className={classes.appsLink}
                >
                  IOS
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.onekosmos.kernel.blockid"
                  title="https://play.google.com/store/apps/details?id=com.onekosmos.kernel.blockid"
                  target="blank"
                  className={classes.appsLink}
                >
                  Android
                </a>
              </Box>
            </Box>
          </Box>
          {/* <Footer /> */}
        </Box>
      </Grid>
    </Grid>
  );
};
