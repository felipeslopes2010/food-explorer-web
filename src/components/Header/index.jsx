import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";

import { Input } from "../Input";
import { Button } from "../Button";
import logo from "../../assets/polygon.svg";

import { Container, Logo } from "./styles"

export function Header() {
    const role = "admin";

    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo Food Explorer" />
                <div className="logo-wrapper">
                    <h2>food explorer</h2>
                    {
                        role === "admin" && <span>admin</span>
                    }
                </div>
            </Logo>

            <Input
                icon={FiSearch}
                placeholder="Busque por pratos ou ingredientes"
            />

            {
                role === "admin" ? (
                    <Button
                        title="Novo prato"
                    />
                ) : (
                    <Button
                        icon={PiReceiptLight}
                        title="Pedidos (0)"
                    />
                )
            }

            <FiLogOut aria-label="Sair" />
        </Container>
    )
}