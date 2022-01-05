/* Core */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import jwt from "jwt-decode";
/* Actions */
import { authActions } from "../actions";
/* Hooks */
import { useMountedState } from "../../../shared/hooks/useMountedState";
import { useShowMessage } from "../../../shared/hooks/useShowMessage";
/* API */
//import { verifyUser, sendOtp } from "../../../api/auth";
/* Service */
import sessionService from "../../../services/sessionService";
/* Navigation */
import { links } from "../../../navigation/config";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { communityName } = useParams();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useMountedState();
  const [otpValue, setOtpValue] = useState("");
  const [showEmailPhone, setShowEmailPhone] = useState(false);
  const { showMessage } = useShowMessage();

  const {
    sessionIsReady,
    tenantCommunityInfo,
    loading,
    message,
    authenticated,
    brandingSettings,
    loadingSession,
  } = useSelector((state) => state.auth);
  const token = sessionService.getToken();

  let tokeInfo = token !== null && token !== undefined ? jwt(token) : {};
  const { community, authScheme, tenant } = tenantCommunityInfo || {};
  const communityId = community?.id;
  const tenantId = tenant?.id;
  const schemeId = authScheme?.id || "";
  const moduleId = authScheme?.modules?.[0]?.id || "";
  const userToken = userInfo?.user_token || "";
  const username = userInfo?.user?.username;

  const redirectToDashboard = () => {
    history.push(`/${communityName}/${links.dashboard}`);
  };

  useEffect(() => {
    if (otpValue.length === 6) {
    }
  }, [otpValue]);

  const handleLogout = () => {
    dispatch(
      authActions.logout({
        message: {
          show: true,
          text: "You have been logged out successfully",
          severity: "success",
        },
        redirectToLogin: true,
      })
    );
  };

  return {
    sessionIsReady,
    authenticated,
    handleLogout,
    tenantCommunityInfo,
    loadingSession,
    message,
    tokeInfo,
    communityName,
    redirectToDashboard,
    otpValue,
    userInfo,
    isLoading: isLoading || loading,
    brandingSettings,
    setUserInfo,
  };
};
