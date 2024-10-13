import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";

import { Container, Main, Form, InputWrapper, ButtonWrapper } from "./styles"

export function NewFood() {
    return (
        <Container>
            <Header />
            <Main>
                <Link
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
                        <Input
                            placeholder="Refeição"
                        />
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