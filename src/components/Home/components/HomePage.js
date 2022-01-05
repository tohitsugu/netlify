import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
/* Components */
import CustomButton from "../../CommonComponents/Button";
/* Hooks */
import { useHomePage } from "../hooks/useHomePage";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    padding: "65px 10%",
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "top",
  },
  leftSec: {
    width: "50%",
  },
  rightSec: {
    width: "50%",
  },
  heading: {
    fontSize: "32px",
    color: "#416EE6",
    fontWeight: "600",
    lineHeight: "38px",
    marginBottom: "15px",
  },
  content: {
    fontSize: "16px",
    color: "#6F7287",
    fontWeight: "normal",
    lineHeight: "150%",
    marginBottom: "20px",
  },
  QRBoxes: {
    float: "right",
  },
  QRImage: {
    marginTop: "-117px",
    float: "right",
    cursor: "pointer",
  },
  tryBtn: {
    backgroundColor: "#CD040B",
    color: theme.palette.neutral.white,
    fontSize: "14px",
    fontWeight: "700",
  },
}));

export function HomePage(props) {
  const classes = useStyles();
  const { handleRegister } = useHomePage();
  return (
    <>
      <Box className={classes.pageContainer}>
        <Box className={classes.contentWrapper}>
          <Box className={classes.leftSec}>
            <Typography className={classes.heading}>
              Strong Authentication with Strong Identity
            </Typography>
            <Typography className={classes.content}>
              In a matter of minutes, secure your application from
              <br /> password-based attacks with a next generation
              <br /> approach to multi-factor authentication that delivers a
              <br /> frictionless user experience.
            </Typography>
            <CustomButton
              value="Try for free"
              className={classes.tryBtn}
              onClick={handleRegister}
            />
          </Box>
          <Box className={classes.rightSec}>
            <img
              className={classes.QRBoxes}
              src={"img/qr-boxes.png"}
              alt="logo"
            />
            <img
              className={classes.QRImage}
              src={"img/landing-page-qr.png"}
              alt="logo"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
