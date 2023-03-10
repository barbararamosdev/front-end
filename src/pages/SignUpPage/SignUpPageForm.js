import react from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from "./styled"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { BASE_URL } from "../../constants/urls"
import axios from "axios"

const SignUpForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ name:"", email: "", password: "" })
    // const navigate = useNavigate()
    // const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        SignUp()
        // login(form, clear, navigate, setRightButtonText, setIsLoading)
    }

    const SignUp = () => {
        axios.post(`${BASE_URL}/user/signup`, form)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    return (

        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"} // contorno borda
                        fullWidth // alinha c/ imagem
                        margin={"normal"}
                        required //campo obrigatório
                        autoFocus
                        type={"text"}
                    />

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
                </InputsContainer>
                <Button
                    fullWidth
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                > Cadastrar
                </Button>
            </SignUpFormContainer >
        </form>
    )
}

export default SignUpForm