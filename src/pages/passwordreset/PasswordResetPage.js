import LogoHeader from "../../components/core/appbar/LogoHeader";
import PasswordResetForm from "../../components/passwordReset/PasswordResetForm";
import PasswordResetSuccess from "../../components/passwordReset/PasswordResetSuccess";
import React from "react";
import {useSelector} from "react-redux";

const PasswordResetPage = () => {
  const {isSuccess, email} = useSelector(state => state.passwordReset)
  return (
    <>
      <LogoHeader menuItems={[
        {name: "Contact Us", link: "/contact-us"},
        {name: "Sign In", link: "/"},
        {name: "Sign Up", link: "/signup"}]}/>
      {
        isSuccess ?
          <PasswordResetSuccess email={email}/>
          :
          <PasswordResetForm/>
      }


    </>
  )
}

export default PasswordResetPage