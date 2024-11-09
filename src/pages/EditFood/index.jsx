import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import { api } from "../../services/api";

import { IngredientsItem } from "../../components/IngredientsItem";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Main, Form, InputWrapper, ButtonWrapper } from "./styles";

export function EditFood() {
    const [data, setData] = useState(null);
    const [fileName, setFileName] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    function handleAddIngredient() {
        if (newIngredient.trim()) {
            setIngredients(prevState => [...prevState, { name: newIngredient }]);
            setNewIngredient("");
        }
    }

    function handleRemoveIngredient(deletedName) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient.name !== deletedName));
    }

    async function handleUpdateDish(e) {
        e.preventDefault();

        if(!name) {
            return alert("Nome obrigatório!");
        } else if(!category) {
            return alert("Categoria obrigatória!");
        } else if(ingredients.length === 0) {
            return alert("Informe pelo menos um ingrediente!");
        } else if(newIngredient) {
            return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar! Clique para adicionar ou deixe o campo vazio.");
        } else if(!price) {
            return alert("Preço obrigatório!");
        } else if(!description) {
            return alert("Descrição obrigatória!");
        }

        await api.put(`/dishes/${params.id}`, {
            image: fileName,
            name,
            category,
            ingredients,
            price,
            description
        });
        
        alert("Prato atualizado com sucesso!");
        navigate(`/details/${params.id}`);
    }

    async function handleRemoveDish(e) {
        e.preventDefault();
        
        const confirm = window.confirm("Deseja realmente excluir o prato?");
        
        if(confirm) {
            await api.delete(`/dishes/${params.id}`);

            alert("Prato removido com sucesso!");
            navigate('/');
        }
    }

    function handleBack() {
        navigate(-1);
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
            setFileName(response.data.image);
            setName(response.data.name);
            setCategory(response.data.category);
            setIngredients(response.data.ingredients);
            setPrice(response.data.price);
            setDescription(response.data.description);
        }

        fetchDish();
    }, []);

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

                <h1>Editar prato</h1>

                {data && (
                    <Form>
                        <InputWrapper>
                            <label>Imagem do prato</label>
                            <Input
                                icon={FiUpload}
                                placeholder="Selecione imagem"
                                value={fileName}
                                onChange={e => setFileName(e.target.value)}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <label>Nome</label>
                            <Input
                                value={name}
                                placeholder="Ex.: Salada Ceasar"
                                onChange={e => setName(e.target.value)}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <label>Categoria</label>
                            <Input
                                value={category}
                                placeholder="Refeição"
                                onChange={e => setCategory(e.target.value)}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <label>Ingredientes</label>
                            <Input>
                                {ingredients.map((ingredient, index) => (
                                    <IngredientsItem
                                        key={String(index)}
                                        value={ingredient.name}
                                        onClick={() => handleRemoveIngredient(ingredient.name)}
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
                                value={price}
                                placeholder="R$ 00,00"
                                onChange={e => setPrice(e.target.value)}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <label>Descrição</label>
                            <TextArea
                                value={description}
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </InputWrapper>

                        <ButtonWrapper>
                            <Button
                                title="Excluir prato"
                                onClick={handleRemoveDish}
                            />

                            <Button
                                title="Salvar alterações"
                                onClick={handleUpdateDish}
                            />
                        </ButtonWrapper>
                    </Form>
                )}
            </Main>
            <Footer />
        </Container>
    );
}
