/* Core */
import { useHistory } from "react-router-dom";
/* Navigation */
import { links } from "../../../navigation/config";

export const useHomePage = () => {
  const { push } = useHistory();

  const handleRegister = () => {
    console.log("handleRegister");
    push(`${links.register}`);
  };

  return {
    handleRegister,
  };
};
