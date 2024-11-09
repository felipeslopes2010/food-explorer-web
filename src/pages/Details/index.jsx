import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { IoIosArrowBack } from "react-icons/io";
import { FiPlus, FiMinus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

import { Container, Main, Description, IngredientsItems, IngredientsItem, ButtonWrapper, QuantitySelecter } from "./styles"

export function Details() {
    const [data, setData] = useState(null);

    const params = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    function handleEditDish() {
        navigate(`/edit/${params.id}`);
    }

    function handleBack() {
        navigate(-1);
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
        }

        fetchDish();
    }, []);

    return (
        <Container>
            <Header />

            <button
                type="button"
                onClick={handleBack}
            >
                <IoIosArrowBack />
                voltar
            </button>

            {
                data &&
                    <Main>
                        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Imagem do prato escolhido" />
                        <Description>
                            <h1>{data.name}</h1>
                            <p>{data.description}</p>

                            {
                                data.ingredients && 
                                    <IngredientsItems>
                                        {
                                            data.ingredients.map(ingredient => (
                                                <IngredientsItem
                                                    key={String(ingredient.id)}
                                                >
                                                    <span>{ingredient.name}</span>
                                                </IngredientsItem>
                                            ))
                                        }
                                    </IngredientsItems>
                            }

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
            }

            <Footer />
        </Container>
    )
}