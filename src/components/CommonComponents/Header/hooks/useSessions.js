/* Core */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";
/* Actions */
import { authActions } from "../../../Auth/actions";
/* Navigation */
import { links } from "../../../../navigation/config";

export const useSession = () => {
  const dispatch = useDispatch();
  //const { communityName } = useParams();
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { sessionIsReady, redirectToLogin } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!sessionIsReady) {
      dispatch(authActions.prepareSessionRequest());
    }
  }, [dispatch, sessionIsReady]);

  // useEffect(() => {
  //   if (
  //     redirectToLogin &&
  //     pathname !== `/${links.login}` &&
  //     pathname !== `/${links.root}`
  //   ) {
  //     push(`/${links.root}`);
  //   }
  // }, [redirectToLogin, push, pathname]);

  return {
    sessionIsReady,
  };
};
