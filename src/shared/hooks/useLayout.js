/* Core */
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
/* Hooks */
import { useSession } from "modules/auth/hooks/useSession";
import { useDocumentTitle } from "shared/hooks/useDocumentTitle";
/* Navigation */
import { links } from "navigation/config";

export const useLayout = () => {
  const { communityName } = useParams();
  const { pathname } = useLocation();
  const { sessionIsReady } = useSession();
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const [isSmallScreenDrawerOpen, setSmallScreenDrawerOpen] = useState(false);
  const theme = useTheme();
  const { brandingSettings } = useSelector((state) => state.auth);
  useDocumentTitle();
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isSso = pathname === `/${communityName}/${links.sso}`;
  const isLogin = pathname === `/${communityName}/${links.login}`;
  const isRequestInvite =
    pathname === `/${communityName}/${links.requestInvite}`;
  const toggleDrawer = () => {
    setDrawerOpen((open) => !open);
  };
  const toggleSmallScreenDrawer = () => {
    setSmallScreenDrawerOpen((open) => !open);
  };

  const showSidebar = !isLogin && !isSso && !isRequestInvite && sessionIsReady;
  const withDrawer =
    isDrawerOpen && showSidebar && sessionIsReady && largeScreen;
  const withSidebar =
    showSidebar && sessionIsReady && !isDrawerOpen && largeScreen;

  const fullWidth = pathname === `/${communityName}/${links.users}`;

  const showBG = (isLogin || isSso) && sessionIsReady;
  return {
    toggleDrawer,
    toggleSmallScreenDrawer,
    withDrawer,
    withSidebar,
    fullWidth,
    isSmallScreenDrawerOpen,
    showBG,
    isSso,
    isLogin,
    showSidebar,
    isDrawerOpen,
    setDrawerOpen,
    largeScreen,
    sessionIsReady,
    brandingSettings,
  };
};
