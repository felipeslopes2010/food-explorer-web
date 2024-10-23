import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "../../components/Link"

import { Container, InputWrapper, Logo, Form } from "./styles";

export function SignUp() {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/');
    }

    return (
        <Container>
            <Logo>
                <img src="../src/assets/polygon.svg" alt="Logo Food Explorer" />
                <h1>food explorer</h1>
            </Logo>
            <Form>
                <h2>Crie sua conta</h2>

                <InputWrapper>
                    <label htmlFor="username">Seu nome</label>
                    <Input
                        id="username"
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        maxLength="30"
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="email">Email</label>
                    <Input
                        id="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="email"
                        maxLength="30"
                    />
                  </InputWrapper>

                <InputWrapper>
                    <label htmlFor="password">Senha</label>
                    <Input
                        id="password"
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        maxLength="30"
                    />
                </InputWrapper>

                <Button title="Criar conta" />

                <Link 
                    title="Já tenho uma conta"
                    onClick={handleNavigate}
                />
            </Form>
        </Container>
    );
}