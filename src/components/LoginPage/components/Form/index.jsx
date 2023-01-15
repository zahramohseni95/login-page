// local components
import { SocialMedia } from "./components/SocialMedia";
// mantine components
import { Button, Divider, Input, PasswordInput } from "@mantine/core";
//icons
import { BsEye, BsEyeSlash, BsFacebook } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
// styles
import "./index.scss";

export function Form() {
  return (
    <form>
      <Input
        className="form-input mb-3"
        icon={<IoMailOutline className="input-icon" />}
        placeholder="you@example.com"
      />

      <PasswordInput
        className="form-input"
        icon={<AiOutlineLock className="input-icon" />}
        placeholder="At least 8 characters"
        visibilityToggleIcon={({ reveal }) =>
          reveal ? <BsEyeSlash color="#000" /> : <BsEye color="#000" />
        }
      />
      <a href="#" className="forgot-password-link">
        Forgot password?
      </a>
      <Button className="login-button mb-3">Login</Button>
      <Divider label="or" labelPosition="center" className="divider" />
      <div className="sm-wrapper">
        <SocialMedia title="Google">
          <FcGoogle />
        </SocialMedia>
        <SocialMedia title="Facebook">
          <BsFacebook color="#3b5998" />
        </SocialMedia>
      </div>
    </form>
  );
}
