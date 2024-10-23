import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

import { Container, InputWrapper, Logo, Form } from "./styles";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const user = {
        name,
        email,
        password,
    };

    function handleSignUp(event) {
        event.preventDefault();

        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", user)
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar");
                }
            });
    }

    return (
        <Container>
            <Logo>
                <img src="../src/assets/polygon.svg" alt="Logo Food Explorer" />
                <h1>food explorer</h1>
            </Logo>
            <Form onSubmit={handleSignUp}>
                <h2>Crie sua conta</h2>

                <InputWrapper>
                    <label htmlFor="name">Seu nome</label>
                    <Input
                        id="name"
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        maxLength="30"
                        onChange={e => setName(e.target.value)}
                    />
                </InputWrapper>

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
                    title="Criar conta"
                    type="submit"
                />

                <Link to="/" title="Já tenho uma conta" />
            </Form>
        </Container>
    );
}
