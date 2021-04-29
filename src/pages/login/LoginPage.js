import Login from "../../components/login/Login";
import LogoHeader from "../../components/core/appbar/LogoHeader";

export default function LoginPage() {
  return (
    <>
      <LogoHeader menuItems={
        [
          {name: "Contact Us", link: "/contact-us"},
          {name: "Sign Up", link: "/signup"}
        ]
      }/>
      <Login/>
    </>
  )
}