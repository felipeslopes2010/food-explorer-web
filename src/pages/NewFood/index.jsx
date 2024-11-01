import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import { IngredientsItem } from "../../components/IngredientsItem";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";

import { Container, Main, Form, InputWrapper, ButtonWrapper } from "./styles"

export function NewFood() {
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    function handleAddIngredient() {
        if(newIngredient.trim()) {
            setIngredients(prevState => [...prevState, newIngredient]);
            setNewIngredient("");
        }
    }

    return (
        <Container>
            <Header />
            <Main>
                <Link to="/"
                    icon={IoIosArrowBack}
                    title="voltar"
                />

                <h1>Adicionar prato</h1>

                <Form>
                    <InputWrapper>
                        <label>Imagem do prato</label>
                        <Input
                            icon={FiUpload}
                            placeholder="Selecione imagem"
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <label>Nome</label>
                        <Input
                            placeholder="Ex.: Salada Ceasar"
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <label>Categoria</label>
                        <Input
                            placeholder="Refeição"
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <label>Ingredientes</label>
                        <Input>
                            {
                                ingredients.map((ingredient, index) => (
                                        <IngredientsItem
                                            key={index}
                                            value={ingredient}
                                            onClick={() => { }}
                                        />
                                 ))
                            }
                            <IngredientsItem
                                isnew
                                placeholder="Adicionar"
                                value={newIngredient}
                                onChange={e => setNewIngredient(e.target.value)}
                                onClick={handleAddIngredient}
                            />
                        </Input>
                    </InputWrapper>

                    <InputWrapper>
                        <label>Preço</label>
                        <Input
                            placeholder="R$ 00,00"
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <label>Descrição</label>
                        <TextArea
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        />
                    </InputWrapper>

                    <ButtonWrapper>
                        <Button
                            title="Salvar alterações"
                        />
                    </ButtonWrapper>
                </Form>
            </Main>
            <Footer />
        </Container>
    )
}