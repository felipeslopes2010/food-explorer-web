import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import { HeaderCostumer } from "../../components/HeaderCostumer";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Footer";

import bannerImg from "../../assets/macaron-banner.png"
import salada from "../../assets/dishes/salada.png"
import torradas from "../../assets/dishes/torradas.png"
import salada2 from "../../assets/dishes/salada2.png"
import spaguetti from "../../assets/dishes/spaguetti.png"
import prugna from "../../assets/dishes/prugna.png"
import peachy from "../../assets/dishes/peachy.png"
import macarons from "../../assets/dishes/macarons.png"
import boloDamasco from "../../assets/dishes/bolo-damasco.png"
import cafeExpresso from "../../assets/dishes/cafe-expresso.png"
import sucoMaracuja from "../../assets/dishes/suco-maracuja.png"
import chaOutono from "../../assets/dishes/cha-outono.png"
import chaMaca from "../../assets/dishes/cha-maca.png"

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
                    description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."
                    priece="R$ 49,97"
                />

                <ProductCard
                    image={spaguetti}
                    name="Spaguetti Gambe"
                    description="Massa fresca com camarões e pesto."
                    priece="R$ 79,97"
                />

                <ProductCard
                    image={torradas}
                    name="Torradas de Parma"
                    description="Presunto de parma e rúcula em um pão com fermentação natural."
                    priece="R$ 49,97"
                />

                <ProductCard
                    image={salada2}
                    name="Salada Caesar"
                    description="Salada clássica e popular que consiste em alface romana, croutons e queijo parmesão "
                    priece="R$ 35,97"
                />

            <IoIosArrowForward />
            </Products>

            <h2>Sobremesas</h2>

            <Products>
                <IoIosArrowBack />
                <ProductCard
                    image={prugna}
                    name="Prugna Pie"
                    description="Torta de ameixa com massa amanteigada, polvilho em açúcar."
                    priece="R$ 79,97"
                />

                <ProductCard
                    image={peachy}
                    name="Peachy pastrie"
                    description="Delicioso folheado de pêssego com folhas de hortelã."
                    priece="R$ 32,97"
                />

                <ProductCard
                    image={macarons}
                    name="Macarons"
                    description="Farinha de amêndoas, manteiga, claras e açúcar."
                    priece="R$ 79,97"
                />

                <ProductCard
                    image={boloDamasco}
                    name="Bolo de damasco"
                    description="Bolo de chocolate com damascos secos e picados e açúcar de confeiteiro"
                    priece="R$ 69,97"
                />

            <IoIosArrowForward />
            </Products>

            <h2>Bebidas</h2>

            <Products>
                <IoIosArrowBack />
                <ProductCard
                    image={cafeExpresso}
                    name="Café Expresso"
                    description="Café cremoso feito na temperatura e pressões perfeitas."
                    priece="R$ 15,97"
                />

                <ProductCard
                    image={sucoMaracuja}
                    name="Suco de maracujá"
                    description="Suco de maracujá gelado, cremoso, docinho."
                    priece="R$ 13,97"
                />

                <ProductCard
                    image={chaOutono}
                    name="Tè d'autunno"
                    description="Chá de anis, canela e limão. Sinta o outono italiano."
                    priece="R$ 19,97"
                />

                <ProductCard
                    image={chaMaca}
                    name="Pomme d'Or"
                    description="Um coquetel refrescante que combina a suavidade da maçã com o calor do whisky."
                    priece="R$ 19,97"
                />

            <IoIosArrowForward />
            </Products>
        </Main>

        <Footer />
        </Container>
    )
}