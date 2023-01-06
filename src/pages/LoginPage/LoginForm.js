import react from "react"
import { InputsContainer, LoginFormContainer } from "./styled"
import TextField from '@material-ui/core/TextField'
import useForm from "../../hooks/useForm"
import Button from '@material-ui/core/Button'
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
// import CircularProgress from '@material-ui/core/CircularProgress'
// import React, { useState } from "react"


const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    // const navigate = useNavigate()
    // const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
    // login(form, clear, navigate, setRightButtonText, setIsLoading)
    }

    const login = () => {
        axios.post (`${BASE_URL}/user/login`, form)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return (

            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"} // contorno borda
                        fullWidth // alinha c/ imagem
                        margin={"normal"}
                        required //campo obrigatório
                        type={"email"}
                    />

                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth 
                        margin={"normal"}
                        required 
                        type={"password"}
                    />
            
            <Button
                fullWidth
                type={"submit"}
                variant={"contained"}
                color={"primary"}
                
            > Fazer login!
                {/* {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>} */}
            </Button>
            </form>
            </InputsContainer>
     
        
    )
}

export default LoginForm