import {useSelector} from "react-redux";
import SetPasswordForm from "../../components/setPassword/setPasswordForm";
import SetPasswordSuccess from "../../components/setPassword/SetPasswordSuccess";
import SetPasswordFailed from "../../components/setPassword/SetPasswordFailed";
import LogoHeader from "../../components/core/appbar/LogoHeader";

const SetPassword = () => {

  const {errors, isSuccess} = useSelector(state => state.setPassword)


  return (
    <>
      <LogoHeader menuItems={
        [
          {name: "Contact Us", link: "/contact-us"},
          {name: "Sign In", link: "/"},
          {name: "Sign Up", link: "/signup"}
        ]
      }
      />
      {
        isSuccess ?
          <SetPasswordSuccess/>
          : ((errors.hasOwnProperty("uid") || errors.hasOwnProperty("token") ?
            <SetPasswordFailed/> : <SetPasswordForm/>
          ))
      }

    </>
  )
}

export default SetPassword