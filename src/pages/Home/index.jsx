import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import { HeaderCostumer } from "../../components/HeaderCostumer";
import { ProductCard } from "../../components/ProductCard";
import bannerImg from "../../assets/macaron-banner.png"
import salada from "../../assets/salada.png"
import spaguetti from "../../assets/spaguetti.png"

import { Container, Main, Banner, Products } from "./styles";

export function Home() {
    return(
        <Container>
            <HeaderCostumer />

        <Main>
            <Banner>
                <img src={bannerImg} alt="Macarons Diversos" />
                <div className="text-wrapper">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </Banner>

            <h2>Refeições</h2>

            <Products>
                <IoIosArrowBack />
                <ProductCard
                    image={salada}
                    name="Salada Ravanello"
                    description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                    priece="R$ 49,97"
                />

                <ProductCard
                    image={spaguetti}
                    name="Spaguetti Gambe"
                    description="Massa fresca com camarões e pesto. "
                    priece="R$ 79,97"
                />

                <ProductCard
                    image={salada}
                    name="Salada Ravanello"
                    description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                    priece="R$ 49,97"
                />

                <ProductCard
                    image={salada}
                    name="Salada Ravanello"
                    description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                    priece="R$ 49,97"
                />

            <IoIosArrowForward />
            </Products>
        </Main>

        </Container>
    )
}