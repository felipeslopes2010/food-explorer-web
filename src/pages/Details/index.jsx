import { IoIosArrowBack  } from "react-icons/io";

import { HeaderCostumer } from "../../components/HeaderCostumer";
import { Footer } from "../../components/Footer";
import { Link } from "../../components/Link";
import { Tag } from "../../components/Tag";

import salada from "../../assets/dishes/salada.png"
import { Container, Main, Description, Tags } from "./styles"

export function Details() {
    return (
        <Container>
            <HeaderCostumer />

            <Link
                icon={IoIosArrowBack}
                title="voltar"
            />

            <Main>
                <img src={salada} alt="Imagem do Produto escolhido" />

                <Description>
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

                    <Tags>
                        <Tag title="alface" />
                        <Tag title="cebola" />
                        <Tag title="pão naan" />
                        <Tag title="pepino" />
                        <Tag title="rabanete" />
                        <Tag title="tomate" />
                    </Tags>
                </Description>
            </Main>

            <Footer />
        </Container>
    )
}