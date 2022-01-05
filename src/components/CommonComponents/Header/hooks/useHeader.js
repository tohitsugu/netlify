/* Core */
import { useHistory } from "react-router-dom";
/* Navigation */
import { links } from "../../../../navigation/config";

export const useHeader = () => {
  const { push } = useHistory();
  const handleSignIn = () => {
    console.log("handlesignin");
    push(`${links.login}`);
  };

  const handleRegister = () => {
    console.log("handleRegister");
    push(`${links.register}`);
  };

  return {
    handleSignIn,
    handleRegister,
  };
};
