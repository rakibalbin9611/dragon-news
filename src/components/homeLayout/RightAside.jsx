import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Add from "./Add";
import FindUs from "./FindUs";
import Qzone from "./Qzone";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
  const { user } = use(AuthContext);
  return (
    <div className="space-y-8 ">
      <SocialLogin></SocialLogin>
      {user ? "" : <FindUs></FindUs>}
      <Qzone></Qzone>
      <Add></Add>
    </div>
  );
};

export default RightAside;
