import { Button, Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import Logo from "../../assets/logo.svg"


export function Login(){
    return(
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburguer"/>
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá seja bem vindo ao <span>Dev Burguer!</span>
                    Faça já seu <span>pedido.</span>
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email"/>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password"/>
                    </InputContainer>
                    <Link>Esqueci minha senha</Link>
                    <Button>Entrar</Button>
                </Form>
                <Link>Clique aqui se não possui conta</Link>
            </RightContainer>
        </Container>
    )
}