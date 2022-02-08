/* Core */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* Actions */
import { authActions } from "../../../Auth/actions";

export const useSession = () => {
  const dispatch = useDispatch();
  const { sessionIsReady } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!sessionIsReady) {
      dispatch(authActions.prepareSessionRequest());
    }
  }, [dispatch, sessionIsReady]);

  return {
    sessionIsReady,
  };
};
