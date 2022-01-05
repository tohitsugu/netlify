/* Core */
import React, { memo } from "react";
import { Provider } from "react-redux";
import { create } from "jss";
import { makeStyles, Box } from "@material-ui/core";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createWrapper } from "next-redux-wrapper";
import PropTypes from "prop-types";
/* Components */
import Header from "../../components/CommonComponents/Header/Header";
import { Footer } from "../../components/CommonComponents/Footer/Footer";
import Sidebar from "../../components/CommonComponents/Sidebar/Sidebar";
import AppError from "../../components/CommonComponents/AppError";
/* Styles */
import useTheme from "../../styles/useTheme";
import GlobalCss from "../../styles/globalCSS";
/* Store */
import { store } from "../../init/store";

const useStyles = makeStyles(() => ({
  pageContainer: {
    backgroundColor: "#f2f2fd",
    paddingLeft: (props) => (props.isRegister ? "0px" : "20%"),
    paddingTop: "100px",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
}));

const jss = create({
  plugins: [...jssPreset().plugins],
});
const Layout = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);

  return (
    <AppError>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalCss />
          <Provider store={store}>
            <Header {...props} />
            {!props.isLogin && <Sidebar />}
            <Box className={classes.pageContainer}>{props.children}</Box>
            {!props.isLogin && <Footer />}
          </Provider>
        </ThemeProvider>
      </StylesProvider>
    </AppError>
  );
};
Layout.propTypes = {
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
};
Layout.defaultTypes = {
  isLogin: false,
  isRegister: false,
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(memo(Layout));
