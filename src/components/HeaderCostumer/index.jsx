import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";

import { Input } from "../Input";
import { Button } from "../Button";
import logo from "../../assets/polygon.svg";


import { Container, Logo } from "./styles"

export function HeaderCostumer() {
    return(
        <Container>
            <Logo>
                <img src={logo} alt="Logo Food Explorer" />
                <h2>food explorer</h2>
            </Logo>

            <Input 
               icon={FiSearch}
                placeholder="Busque por pratos ou ingredientes"      
            />

            <Button
                icon={PiReceiptLight} 
                title="Pedidos (0)"
            />

            <FiLogOut />

        </Container>
    )
}