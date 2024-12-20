import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";

import { Input } from "../Input";
import { Button } from "../Button";
import logo from "../../assets/polygon.svg";

import { Container, Logo } from "./styles"

export function Header({ onSearchChange }) {
    const { user, signOut } = useAuth();

    const navigate = useNavigate();

    function handleSignout() {
        navigate('/');
        signOut();
    }

    function handleBack() {
        navigate('/');
    }

    function handleNewDish() {
        navigate('/new');
    }

    return (
        <Container>
            <Logo onClick={handleBack}>
                <img src={logo} alt="Logo Food Explorer" />
                <div className="logo-wrapper">
                    <h2>food explorer</h2>
                    {
                        user.role === "admin" && <span>admin</span>
                    }
                </div>
            </Logo>

            <Input
                icon={FiSearch}
                placeholder="Busque por pratos ou ingredientes"
                onChange={e => onSearchChange(e.target.value)}
            />

            {
                user.role === "admin" ? (
                    <Button
                        title="Novo prato"
                        onClick={handleNewDish}
                    />
                ) : (
                    <Button
                        icon={PiReceiptLight}
                        title="Pedidos (0)"
                    />
                )
            }

            <FiLogOut
                aria-label="Sair"
                onClick={handleSignout}
            />
        </Container>
    )
}