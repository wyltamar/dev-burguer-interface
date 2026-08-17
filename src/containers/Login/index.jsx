import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles";
import Logo from "../../assets/logo.svg"
import { Button } from "../../components/Button";

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        email: yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
        password: yup.string()
        .min(6, 'Sua senha deve ter no mínimo 6 caracteres')
        .required('Sua senha é um campo obrigatório'),
    })
    .required()

export function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => console.log(data)

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburguer" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e Senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <a>Clique aqui.</a></p>
            </RightContainer>
        </Container>
    )
}