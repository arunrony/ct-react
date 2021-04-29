import LogoHeader from "../../components/core/appbar/LogoHeader";
import ContactForm from "../../components/contact/ContactForm";

const ContactPage = () => {
  return(
    <>
      <LogoHeader menuItems={
        [
          {name: "Sign In", link: "/"},
          {name: "Sign Up", link: "/signup"}
        ]
      }/>
      <ContactForm/>
    </>
  )
}

export default ContactPage