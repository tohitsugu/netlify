/* Services */
import ECDSA from "./ECDSA";
import jwt from "jwt-decode";
import { store } from "../init/store";

// localStorage is not available in gmail client webview on Android
let webviewSessionStorage = {};
let webviewLocalStorage = {};

class SessionService {
  sessionKeysAreReady() {
    const serverPublicKey = sessionStorage
      ? sessionStorage?.getItem("serverPublicKey")
      : webviewSessionStorage.serverPublicKey;
    return !!serverPublicKey;
  }

  getServerPublicKey() {
    return window?.sessionStorage
      ? JSON.parse(sessionStorage?.getItem("serverPublicKey"))
      : webviewSessionStorage.serverPublicKey;
  }

  setServerPublicKey(key) {
    if (sessionStorage) {
      sessionStorage?.setItem("serverPublicKey", JSON.stringify(key));
    } else {
      webviewSessionStorage.serverPublicKey = key;
    }
  }

  getCommunityKeys() {
    return sessionStorage
      ? JSON.parse(sessionStorage?.getItem("communityKeys"))
      : webviewSessionStorage.communityKeys;
  }

  setCommunityKeys() {
    const [privateKey, publicKey] = ECDSA.generateKeyPair();
    if (sessionStorage) {
      sessionStorage?.setItem(
        "communityKeys",
        JSON.stringify({ icontext: privateKey, bcontext: publicKey })
      );
    } else {
      webviewSessionStorage.communityKeys = {
        icontext: privateKey,
        bcontext: publicKey,
      };
    }
  }

  getToken(communityId) {
    if (communityId === undefined) {
      const {
        auth: { tenantCommunityInfo },
      } = store.getState((state) => state.auth);
      communityId = tenantCommunityInfo?.community?.id;
    }
    return localStorage
      ? localStorage?.getItem(`${communityId}_token`)
      : webviewLocalStorage[`${communityId}_token`];
  }

  setSessionToken(communityId, token) {
    if (token) {
      if (localStorage) {
        localStorage?.setItem(`${communityId}_token`, token);
      } else {
        webviewLocalStorage[`${communityId}_token`] = token;
      }
    } else {
      if (localStorage) {
        localStorage?.removeItem(`${communityId}_token`);
      } else {
        webviewLocalStorage[`${communityId}_token`] = token;
      }
    }
  }

  clearSession() {
    const {
      auth: { tenantCommunityInfo },
    } = store.getState((state) => state.auth);

    if (sessionStorage) {
      sessionStorage?.removeItem("serverPublicKey");
      sessionStorage?.removeItem("communityKeys");
    }
    if (localStorage) {
      localStorage?.removeItem(`${tenantCommunityInfo?.community?.id}_token`);
    }
    webviewSessionStorage = {};
    webviewLocalStorage = {};
  }

  getPermission() {
    const {
      auth: { tenantCommunityInfo },
    } = store.getState((state) => state.auth);
    let permission = "basic-user";
    const jwt_token = this.getToken();
    let token =
      jwt_token !== null && jwt_token !== undefined ? jwt(jwt_token) : null;
    if (token && token?.permissions && token?.permissions?.length > 0) {
      const tenantAdmin = token.permissions.filter((item) => {
        return (
          item.subjectType === "tenant" &&
          item.subjectId === tenantCommunityInfo?.tenant?.id
        );
      });

      const communityAdmin = token.permissions.filter((item) => {
        return (
          item.subjectType === "community" &&
          item.subjectId === tenantCommunityInfo?.community?.id
        );
      });
      permission =
        tenantAdmin.length > 0
          ? tenantAdmin[0].permission
          : communityAdmin.length > 0
          ? communityAdmin[0].permission
          : permission;
    }
    return permission;
  }
}

export default new SessionService();
