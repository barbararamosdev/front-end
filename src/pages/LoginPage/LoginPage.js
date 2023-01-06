import react from "react"
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled"
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import React, { useState } from "react"
// import {login} from "../../services/user"
import logo from "../../assets/logo.png"
import LoginForm from "./LoginForm"
import { useNavigate } from "react-router-dom"
import { goToSignUp } from "../../routes/coordinator"

const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                onClick={() => goToSignUp (navigate)}
                    fullWidth
                    type={"submit"}
                    variant={"text"}
                    color={"primary"}
                > Não possui conta? Cadastre-se!
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer >

    )
}

export default LoginPage