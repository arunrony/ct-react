import LogoHeader from "../../components/core/appbar/LogoHeader";
import Signup from "../../components/signup/Signup";

const SignupPage = () => {
  return (
    <>
      <LogoHeader menuItems={
        [
          {name: "Contact Us", link: "/contact-us"},
          {name: "Sign In", link: "/"}
        ]
      }/>
      <Signup/>
    </>
  )
}

export default SignupPage