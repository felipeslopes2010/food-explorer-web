import { useNavigate } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import { Header } from "../../components/Header";
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
    const navigate = useNavigate();
    
    function handleDetails() {
        navigate('/details/1');
    }

    function handleEdit(event) {
       event.stopPropagation();
        
        navigate('/edit/1');
    }

    return(
        <Container>
            <Header />

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
                    price="R$ 49,97"
                    onEdit={handleEdit}
                    onClick={handleDetails}
                />

                <ProductCard
                    image={spaguetti}
                    name="Spaguetti Gambe"
                    description="Massa fresca com camarões e pesto."
                    price="R$ 79,97"
                />

                <ProductCard
                    image={torradas}
                    name="Torradas de Parma"
                    description="Presunto de parma e rúcula em um pão com fermentação natural."
                    price="R$ 49,97"
                />

                <ProductCard
                    image={salada2}
                    name="Salada Caesar"
                    description="Salada clássica e popular que consiste em alface romana, croutons e queijo parmesão "
                    price="R$ 35,97"
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
                    price="R$ 79,97"
                />

                <ProductCard
                    image={peachy}
                    name="Peachy pastrie"
                    description="Delicioso folheado de pêssego com folhas de hortelã."
                    price="R$ 32,97"
                />

                <ProductCard
                    image={macarons}
                    name="Macarons"
                    description="Farinha de amêndoas, manteiga, claras e açúcar."
                    price="R$ 79,97"
                />

                <ProductCard
                    image={boloDamasco}
                    name="Bolo de damasco"
                    description="Bolo de chocolate com damascos secos e picados e açúcar de confeiteiro"
                    price="R$ 69,97"
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
                    price="R$ 15,97"
                />

                <ProductCard
                    image={sucoMaracuja}
                    name="Suco de maracujá"
                    description="Suco de maracujá gelado, cremoso, docinho."
                    price="R$ 13,97"
                />

                <ProductCard
                    image={chaOutono}
                    name="Tè d'autunno"
                    description="Chá de anis, canela e limão. Sinta o outono italiano."
                    price="R$ 19,97"
                />

                <ProductCard
                    image={chaMaca}
                    name="Pomme d'Or"
                    description="Um coquetel refrescante que combina a suavidade da maçã com o calor do whisky."
                    price="R$ 19,97"
                />

            <IoIosArrowForward />
            </Products>
        </Main>

        <Footer />
        </Container>
    )
}