import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { FiPlus, FiMinus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { IngredientsItem } from "../../components/IngredientsItem";

import salada from "../../assets/dishes/salada.png"
import { Container, Main, Description, IngredientsItems, ButtonWrapper, QuantitySelecter } from "./styles"

export function Details() {
    const { user } = useAuth();

    const navigate = useNavigate();

    function handleEditDish() {
        navigate('/edit/1');
    }

    return (
        <Container>
            <Header />

            <Link to="/"
                icon={IoIosArrowBack}
                title="voltar"
            />

            <Main>
                <img src={salada} alt="Imagem do Produto escolhido" />

                <Description>
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

                    <IngredientsItems>
                        <IngredientsItem title="alface" />
                        <IngredientsItem title="cebola" />
                        <IngredientsItem title="pão naan" />
                        <IngredientsItem title="pepino" />
                        <IngredientsItem title="rabanete" />
                        <IngredientsItem title="tomate" />
                    </IngredientsItems>

                    {
                        user.role !== "admin" ? (
                            <ButtonWrapper>
                                <QuantitySelecter>
                                    <FiMinus />
                                    <span>01</span>
                                    <FiPlus />
                                </QuantitySelecter>
    
                                <Button title="incluir ∙ R$ 25,00" />
                            </ButtonWrapper>
                        ) : (
                            <ButtonWrapper>
                                <Button
                                    title="Editar prato"
                                    onClick={handleEditDish}
                                />
                            </ButtonWrapper>
                        )
                    }

                </Description>
            </Main>

            <Footer />
        </Container>
    )
}