
import logo from "../../assets/darkPolygon.png";

import { Container, Logo } from "./styles"

export function Footer() {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo Food Explorer" />
                <h2>food explorer</h2>
            </Logo>

            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    )
}