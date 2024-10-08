
import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";

import { Button } from "../Button";

import { Container, ButtonWrapper } from "./styles";

export function ProductCard({ image, name, description, priece  }) {
    const quantity = 1;

    return (
        <Container>
            <FiHeart />
            <img src={image} alt="Imagem Prato" />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{priece}</span>
            
            <ButtonWrapper>
                <div className="quantity-wrapper">
                    <button><FiMinus /></button>
                    <span>{quantity}</span>
                    <button><FiPlus /></button>
                </div>

                <Button title="incluir" />
            </ButtonWrapper>
        </Container>
    )
}