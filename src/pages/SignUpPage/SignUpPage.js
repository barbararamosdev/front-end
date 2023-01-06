import react from "react"
import logo from "../../assets/logo.png"
import { ScreenContainer,  } from "./styled"
import SignUpForm from "./SignUpPageForm"
import { LogoImage } from "../LoginPage/styled"


const SignUpPage = () => {
    return (
        <ScreenContainer>
            <LogoImage src={logo} /> 
            <SignUpForm />       
       </ScreenContainer >
    )
}

export default SignUpPage