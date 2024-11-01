import { useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

import { useAuth } from "../../hooks/auth";

import { Container, Logo, Form, InputWrapper } from "./styles";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(event) {
        event.preventDefault();
        
        signIn({ email, password });
    }

    return (
        <Container>
            <Logo>
                <img src="../src/assets/polygon.svg" alt="Logo Food Explorer" />
                <h1>food explorer</h1>
            </Logo>
            <Form onSubmit={handleSignIn}>
                <h2>Faça login</h2>

                <InputWrapper>
                    <label htmlFor="email">Email</label>
                    <Input
                        id="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="email"
                        maxLength="30"
                        onChange={e => setEmail(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="password">Senha</label>
                    <Input
                        id="password"
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        maxLength="30"
                        onChange={e => setPassword(e.target.value)}
                    />
                </InputWrapper>

                <Button 
                    title="Entrar"
                    type="submit"
                />

                <Link
                    to="/register"
                    title="Criar uma conta"
                />
            </Form>
        </Container>
    );
}
