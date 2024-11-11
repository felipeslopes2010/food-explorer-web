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

import { Container, Main, Form, InputWrapper, ButtonWrapper } from "./styles";

export function NewFood() {
    const [fileName, setFileName] = useState("");
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

    function handleFileChange(e) {
        const file = e.target.files[0];

        if (file) {
            setFileName(file.name);
        }
    }

    async function handleNewDish(e) {
        e.preventDefault();

        if(!name) {
            return alert("Nome obrigatório!")
        } else if(!category) {
            return alert("Categoria obrigatória!")
        } else if(ingredients.length === 0) {
            return alert("Informe pelo menos um ingrediente!")
        } else if(newIngredient) {
            return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar! Clique para adicionar ou deixa o campo vazio.")
        } else if(!price) {
            return alert("Preço obrigatório!")
        } else if(!description) {
            return alert("Descrição obrigatória!")
        }

        await api.post("/dishes", {
            image: fileName,
            name,
            category,
            ingredients,
            price,
            description
        });

        alert("Prato criado com sucesso!");
        navigate("/");
    }

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <Header />
            <Main>
                <button
                    type="button"
                    onClick={handleBack}
                >
                    <IoIosArrowBack />
                    voltar
                </button>

                <h1>Adicionar prato</h1>

                <Form>
                    <InputWrapper>
                        <label>Imagem do prato</label>
                        <div
                            onClick={() => document.getElementById("imageInput").click()}
                        >
                            <FiUpload size={16} />
                            {fileName ? <span>{fileName}</span> : <span>Selecione imagem</span>}
                            <input 
                                id="imageInput" 
                                type="file" 
                                onChange={handleFileChange}
                            />
                        </div>

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
                        <select
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        >
                            <option value="refeicao">Refeição</option>
                            <option value="sobremesa">Sobremesa</option>
                            <option value="bebida">Bebida</option>
                        </select>
                    </InputWrapper>

                    <InputWrapper>
                        <label>Ingredientes</label>
                        <Input>
                            {ingredients.map((ingredient, index) => (
                                <IngredientsItem
                                    key={String(index)}
                                    value={ingredient}
                                    onClick={() => handleRemoveIngredient(ingredient)}
                                />
                            ))}
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
