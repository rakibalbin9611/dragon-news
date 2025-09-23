import Add from "./Add";
import FindUs from "./FindUs";
import Qzone from "./Qzone";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
  return (
    <div className="space-y-8 ">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
      <Add></Add>
    </div>
  );
};

export default RightAside;
