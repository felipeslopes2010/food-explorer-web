import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";
import { PiPencilSimpleLight } from "react-icons/pi";

import { Button } from "../Button";

import { Container, ButtonWrapper } from "./styles";

export function ProductCard({ image, name, description, price, onEdit, ...rest }) {
    const quantity = 1;
    const user = "admin"

    return (
        <Container {...rest}>
            {
                user === "admin" ? <PiPencilSimpleLight onClick={onEdit} /> : <FiHeart />
            }

            <img src={image} alt="Imagem Prato" /> 
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{price}</span>

            {
                user !== "admin" &&
                <ButtonWrapper>
                    <div className="quantity-wrapper">
                        <button><FiMinus /></button>
                        <span>{quantity}</span>
                        <button><FiPlus /></button>
                    </div>
                    <Button title="incluir" />
                </ButtonWrapper>
            }
        </Container>
    )
}