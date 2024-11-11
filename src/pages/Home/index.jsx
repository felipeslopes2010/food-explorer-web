import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Footer";

import bannerImg from "../../assets/macaron-banner.png";

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
            if (search) {
                const response = await api.get(`/dishes?name=${search}`);
                setDishes(response.data);
            } else {
                const response = await api.get("/dishes");
                setDishes(response.data);
            }
        }

        fetchDishes();
    }, [search]);


    return (
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
                        dishes.filter(dish => dish.category === "refeicao").length >= 4 && <IoIosArrowBack />
                    }
                    {
                        dishes.filter(dish => dish.category === "refeicao").map(dish => (
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
                        dishes.filter(dish => dish.category === "refeicao").length >= 4 && <IoIosArrowForward />
                    }
                </Products>

                <h2>Sobremesas</h2>
                <Products>
                    {
                        dishes.filter(dish => dish.category === "sobremesa").length >= 4 && <IoIosArrowBack />
                    }
                    {
                        dishes.filter(dish => dish.category === "sobremesa").map(dish => (
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
                        dishes.filter(dish => dish.category === "sobremesa").length >= 4 && <IoIosArrowForward />
                    }
                </Products>

                <h2>Bebidas</h2>
                <Products>
                {
                        dishes.filter(dish => dish.category === "bebida").length >= 4 && <IoIosArrowBack />
                    }
                    {
                        dishes.filter(dish => dish.category === "bebida").map(dish => (
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
                        dishes.filter(dish => dish.category === "bebida").length >= 4 && <IoIosArrowForward />
                    }
                </Products>
            </Main>

            <Footer />
        </Container>
    );
}
