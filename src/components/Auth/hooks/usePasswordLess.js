/* Core */
import { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
/* Actions */
import { authActions } from "../actions";
/* API */
//import { createNewSession, sendPushNotification } from "api/auth";
/* Hooks */
import { useMountedState } from "../../../shared/hooks/useMountedState";
import { useInterval } from "../../../shared/hooks/useInterval";
import { useShowMessage } from "../../../shared/hooks/useShowMessage";
/* Navigation */
import { links } from "../../../navigation/config";

export const usePasswordLess = ({ authenticated, userInfo, setUserInfo }) => {
  const [session, setSession] = useState(false);
  const [QRValue, setQRValue] = useState(null);
  const sessionTimeId = useRef(null);
  const [pushSession, setPushSession] = useState(null);
  const pushSessionTimeId = useRef(null);
  const [index, setIndex] = useState(0);
  const [userNameScreenIndex, setUserNameScreenIndex] = useState(0);
  const [userName, setUserName] = useState("");
  const [sendingPush, setSendingPush] = useState(false);
  const isMounted = useMountedState();
  const dispatch = useDispatch();
  const { communityName } = useParams();
  const { push } = useHistory();
  const { tenantCommunityInfo } = useSelector((state) => state.auth);
  const { tenant, community, authScheme } = tenantCommunityInfo || {};
  const { showMessage } = useShowMessage();
  const communityId = community?.id;
  const tenantTag = tenant?.tag;
  const tenantId = tenant?.id;
  const schemeId = authScheme?.id;
  const moduleId = authScheme?.modules[0]?.id;

  const createSessionParams = useMemo(
    () => ({
      tag: tenantTag,
      url: `${window?.location?.protocol}//${window?.location?.host}`,
      communityName,
      communityId,
      authPage: "blockid://authenticate",
      scopes: "firstname,lastname,ial,aal,device_info,location",
      authtype: "Fingerprint",
    }),
    [communityId, tenantTag, communityName]
  );

  const toggleAuthOption = (index) => {
    if (isMounted()) {
      setSession(null);
      setPushSession(null);
      setQRValue(null);
      setIndex(index);
      setUserNameScreenIndex(0);
      setUserInfo(null);
      if (pushSessionTimeId.current) {
        clearTimeout(pushSessionTimeId.current);
      }
      if (sessionTimeId.current) {
        clearTimeout(sessionTimeId.current);
      }
    }
  };

  const errorCallback = () => {
    if (isMounted()) {
      setSession(null);
      setPushSession(null);
      setQRValue(null);
      if (pushSessionTimeId.current) {
        clearTimeout(pushSessionTimeId.current);
      }
      if (sessionTimeId.current) {
        clearTimeout(sessionTimeId.current);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (pushSessionTimeId.current) {
        clearTimeout(pushSessionTimeId.current);
      }
      if (sessionTimeId.current) {
        clearTimeout(sessionTimeId.current);
      }
    };
  }, []);

  useEffect(() => {
    if (userInfo && userNameScreenIndex === 2 && index === 1 && isMounted) {
      setUserNameScreenIndex(3);
    }
    if (!userInfo && userNameScreenIndex === 3 && index === 1 && isMounted) {
      setUserNameScreenIndex(2);
    }
  }, [userInfo, userNameScreenIndex, index, isMounted]);

  useEffect(() => {
    if (
      isMounted() &&
      index === 0 &&
      !session &&
      !authenticated &&
      tenant &&
      community
    ) {
      createNewSession(createSessionParams)
        .then((res) => {
          const {
            data: { data },
          } = res;
          if (isMounted()) {
            console.log({ data });
            setSession(data);
            setQRValue(data.sessionUrl);
            if (sessionTimeId.current) {
              clearTimeout(sessionTimeId.current);
            }
            const timeId = setTimeout(() => {
              if (isMounted) {
                setSession(null);
              }
            }, 60000);
            sessionTimeId.current = timeId;
          }
        })
        .catch((error) => {
          const errorMessage = error?.response?.data?.message;
          if (errorMessage && error?.response?.data?.code !== 401) {
            showMessage(errorMessage, "error", error);
          }
        });
    }
  }, [
    session,
    isMounted,
    community,
    communityName,
    showMessage,
    tenant,
    tenantCommunityInfo,
    index,
    authenticated,
    createSessionParams,
  ]);

  useInterval(() => {
    if (session && index === 0 && !authenticated) {
      dispatch(
        authActions.pwlLoginRequest({
          data: {
            sessionId: session.sessionId,
            communityId,
            tenantId,
          },
          errorCallback,
        })
      );
    }
  }, 500);

  useInterval(() => {
    if (pushSession && !authenticated) {
      dispatch(
        authActions.pwlLoginRequest({
          data: {
            sessionId: pushSession.sessionId,
            communityId,
            tenantId,
          },
          errorCallback,
        })
      );
    }
  }, 500);

  const handleGoToRequestInvite = () => {
    push(`/${communityName}/${links.requestInvite}`);
  };

  const handleSendPushNotification = () => {
    setSendingPush(true);
    createNewSession(createSessionParams)
      .then((res) => {
        const {
          data: { data },
        } = res;
        console.log({ data });
        const params = {
          communityId,
          tenantId,
          schemeId,
          moduleId,
          username: userName,
          sessionUrl: data.sessionUrl,
        };
        sendPushNotification(params)
          .then(() => {
            if (isMounted()) {
              setPushSession(data);
              if (pushSessionTimeId.current) {
                clearTimeout(pushSessionTimeId.current);
              }
              const timeId = setTimeout(() => {
                setPushSession(null);
                dispatch(
                  authActions.showMessage({
                    message: {
                      show: true,
                      title: "No authentication response",
                      text: "We could not get your authentication response, please request a new notification OR try another method",
                      severity: "error",
                    },
                  })
                );
              }, 120000);
              pushSessionTimeId.current = timeId;
              setSendingPush(false);
              dispatch(
                authActions.showMessage({
                  message: {
                    show: true,
                    title: "Push notification Sent",
                    text: "A push notification has been sent to your devices. Check the BlockID app to accept the request. ",
                    severity: "success",
                  },
                })
              );
            }
          })
          .catch((error) => {
            const errorMessage =
              error?.response?.data?.message || "Something went wrong";
            if (errorMessage === "User has not been linked") {
              dispatch(
                authActions.showMessage({
                  message: {
                    show: true,
                    title: "No devices found",
                    text: "There are no devices linked to your account. Start by requesting an invite to enroll for passwordless.",
                    severity: "error",
                    action: "Enroll a device",
                    onActionClick: handleGoToRequestInvite,
                  },
                })
              );
            } else {
              showMessage(errorMessage, "error", error);
            }
            if (isMounted) {
              setSendingPush(false);
            }
          });
      })
      .catch((error) => {
        const errorMessage =
          error?.response?.data?.message || "Something went wrong";
        showMessage(errorMessage, "error", error);
      });
  };

  const handleGoToPasswordScreen = () => {
    setPushSession(null);
    setUserNameScreenIndex(2);
    if (pushSessionTimeId.current) {
      clearTimeout(pushSessionTimeId.current);
    }
  };

  const handleSubmitUserNameScreen = (values) => {
    setUserName(values.username);
    setUserNameScreenIndex(1);
  };

  return {
    QRValue,
    toggleAuthOption,
    index,
    userNameScreenIndex,
    setUserNameScreenIndex,
    userName,
    handleSendPushNotification,
    handleGoToPasswordScreen,
    sendingPush,
    handleSubmitUserNameScreen,
  };
};
