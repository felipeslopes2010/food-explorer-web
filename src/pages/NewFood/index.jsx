import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import { IngredientsItem } from "../../components/IngredientsItem";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";

import { Container, Main, Form, InputWrapper, ButtonWrapper } from "./styles";

export function NewFood() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    function handleAddIngredient() {
        if (newIngredient.trim()) {
            setIngredients(prevState => [...prevState, newIngredient]);
            setNewIngredient("");
        }
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleNewDish(e) {
        e.preventDefault();

        await api.post("/dishes", {
            name,
            category,
            ingredients,
            price,
            description
        });

        alert("Prato criado com sucesso!");
        navigate("/");
    }

    return (
        <Container>
            <Header />
            <Main>
                <Link to="/" icon={IoIosArrowBack} title="voltar" />

                <h1>Adicionar prato</h1>

                <Form>
                    <InputWrapper>
                        <label>Imagem do prato</label>
                        <Input icon={FiUpload} placeholder="Selecione imagem" />
                    </InputWrapper>

                    <InputWrapper>
                        <label>Nome</label>
                        <Input
                            placeholder="Ex.: Salada Ceasar"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <label>Categoria</label>
                        <Input
                            placeholder="Refeição"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
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
                                        onClick={() => handleRemoveIngredient(ingredient)}
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
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <label>Descrição</label>
                        <TextArea
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </InputWrapper>

                    <ButtonWrapper>
                        <Button
                            type="submit"
                            title="Salvar alterações"
                            onClick={e => handleNewDish(e)}
                        />
                    </ButtonWrapper>
                </Form>
            </Main>
            <Footer />
        </Container>
    );
}
