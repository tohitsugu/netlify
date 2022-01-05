/* Core */
import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  typographyOverrides: {
    alignItems: "center",
    textAlign: "center",
    color: theme.palette.neutral.white,
    fontSize: "10px",
    userSelect: "none",
    background: theme.palette.secondary.main,
    height: "72px",
    zIndex: "1",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    fontSize: "14.5px",
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const { tenantCommunityInfo } = useSelector((state) => state.auth);
  // const jiraNumber = process.env.REACT_APP_COMMIT_MESSAGE
  //   ? process.env.REACT_APP_COMMIT_MESSAGE.split(" ")
  //   : "";
  // const jira =
  //   jiraNumber && jiraNumber[0] && jiraNumber[0].startsWith("PL20")
  //     ? ` from Jira ${jiraNumber[0]}`
  //     : "";
  // const time = process.env.REACT_APP_BUILD_TIME
  //   ? `.${process.env.REACT_APP_BUILD_TIME}`
  //   : "";
  // const tag = process.env.REACT_APP_GIT_TAG
  //   ? `${process.env.REACT_APP_GIT_TAG.split("/")[1]}.`
  //   : "";
  // const branch = process.env.REACT_APP_GIT_BRANCH || "";
  // const commit = process.env.REACT_APP_GIT_COMMIT || "1.0";
  // const buildTag = tag || branch;
  // const version = `${buildTag}${commit}${time}`;

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
