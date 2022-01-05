/* Core */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import QRCode from "react-qr-code";
import { isMobile } from "react-device-detect";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
/* Components */
import CustomButton from "../../../CommonComponents/Button";
import { AppLoading } from "../../../CommonComponents/AppLoading";
/* Icons */
//import { PhoneIcon } from "icons/PhoneIcon";
/* Navigation */
import { links } from "../../../../navigation/config";

const useStyles = makeStyles((theme) => ({
  mobileButton: {
    textTransform: "uppercase",
    border: (props) =>
      `1px solid #${props?.brandingSettings?.primary_button_color} !important`,
    backgroundColor: (props) =>
      `#${props?.brandingSettings?.primary_button_color} !important`,
  },
  qrCode: {
    padding: "24px",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      padding: "24px",
    },
  },
  requestInviteLink: {
    textDecoration: "none",
    color: theme.palette.neutral[500],
    fontSize: "1rem",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export const QRCodeTab = (props) => {
  const { sessionValue, renderLogo } = props;
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      textAlign="center"
      height="100%"
    >
      {renderLogo()}
      {!sessionValue ? (
        <>
          <AppLoading size={40} />
          <span>WIP...</span>
        </>
      ) : (
        <>
          <Box
            className={classes.qrCode}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
          >
            {isMobile ? (
              <CustomButton
                value="Login with BlockID"
                className={cx("redButton", classes.mobileButton)}
                type="link"
                variant="contained"
                //icon={<PhoneIcon />}
                href={sessionValue}
                title={sessionValue}
                target="blank"
                rel="noopener noreferrer"
              />
            ) : (
              <a
                href={sessionValue}
                title={sessionValue}
                target="blank"
                rel="noopener noreferrer"
              >
                <QRCode
                  level="H"
                  size={275}
                  value={sessionValue}
                  fgColor={"#20153c"}
                />
              </a>
            )}
          </Box>
          <Link
            to={`/${links.requestAnInvite}`}
            className={classes.requestInviteLink}
          >
            Request an invite
          </Link>
        </>
      )}
    </Box>
  );
};

QRCodeTab.propTypes = {
  renderLogo: PropTypes.func.isRequired,
  sessionValue: PropTypes.string,
};
