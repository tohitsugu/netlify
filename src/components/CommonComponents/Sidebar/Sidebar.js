/* Core */
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import {
  makeStyles,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
/* Components */
import { sidebarConfig } from "../../../navigation/config";

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    backgroundColor: theme.palette.neutral.white,
    // paddingLeft: '20%',
    paddingTop: "100px",
    position: "absolute",
    height: "100%",
    width: "20%",
    zIndex: "1",
  },
  iconContainer: {
    backgroundColor: "#F2F3FD",
    // padding: '4px',
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Sidebar = (props) => {
  const { menu } = sidebarConfig;
  const classes = useStyles();
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box className={classes.sidebarContainer}>
        <List>
          {menu?.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <Box className={classes.iconContainer}>
                  <img src={item.icon} />
                </Box>
              </ListItemIcon>
              {mediumScreen && <ListItemText primary={item.name} />}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

// Sidebar.propTypes = {
//   isDrawerOpen: PropTypes.bool.isRequired,
//   toggleDrawer: PropTypes.func.isRequired,
// };

export default Sidebar;
