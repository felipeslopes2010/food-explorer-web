import { IoIosArrowBack  } from "react-icons/io";

import { HeaderCostumer } from "../../components/HeaderCostumer";
import { Footer } from "../../components/Footer";
import { Link } from "../../components/Link";

import salada from "../../assets/dishes/salada.png"
import { Container, Main, Description } from "./styles"

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


                </Description>
            </Main>

            <Footer />
        </Container>
    )
}