import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

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
    const [dishes, setDishes] = useState([]);
    const [search, setSearch] = useState("");
    
    const navigate = useNavigate();
    
    function handleDetails(dishId) {
        navigate(`/details/${dishId}`);
    }
    
    function handleEdit(event) {
       event.stopPropagation();
        
        navigate('/edit/1');
    }

    useEffect(() => {
        async function fetchDishes() {
            if(search) {
                const response = await api.get(`/dishes?name=${search}`);
                setDishes(response.data);
            } else {
                const response = await api.get("/dishes");
                setDishes(response.data);
            }
        }
        
        fetchDishes();
    }, [dishes, search]);

    return(
        <Container>
            <Header onSearchChange={setSearch} />

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
                {
                    dishes.length >= 4 &&
                    <IoIosArrowBack />
                }

                {
                    dishes &&
                        dishes.map(dish => (
                                <ProductCard
                                    key={String(dish.id)}
                                    image={dish.image}
                                    name={dish.name}
                                    description={dish.description}
                                    price={`R$ ${dish.price}`}
                                    onEdit={handleEdit}
                                    onClick={() => handleDetails(dish.id)}
                                />
                            ))
                }

                {
                    dishes.length >= 4 &&
                    <IoIosArrowForward />
                }
         
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