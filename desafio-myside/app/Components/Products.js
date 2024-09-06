import StyledProducts from './products.styleProvider'
import StyledCard from './ProductCard.styled';
import { useState, useEffect } from 'react';

export default function ProductsJS() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.in/api/products?limit=20");
            const data = await response.json();

            const productArray = data.products.map(product => ({
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                description: product.description,
            }));

            setProducts(productArray);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <StyledProducts>
            <div id='products-header'>
                <div id="product-header-tittle">
                    <h1>Products</h1>
                </div>
                <div id="product-header-search">
                    <input
                    id='search-input'
                    type='search'
                    placeholder='Search'
                    ></input>
                </div>
                <div id="product-header-filter">
                    <button
                    type='button'
                    id='filter-button'
                    // onClick={filterHandler}
                    >Filter </button>
                </div>
            </div>
            <div id='products-container'>
                {products.map((product, index) => (
                <StyledCard key={index} id={`product-${product.id}`}>
                    <div className='card-image-container'>
                        <img src={product.image} alt={product.title} width={150} />
                    </div>
                    <div className='card-body'>
                        <div className='card-title-container'>
                            <h3>{product.title.substr(0, 100)}</h3>
                        </div>
                        <div className='card-description-container'>
                            <p>{product.description.substr(0, 250) + '...'}</p>
                        </div>
                        <p className='card-price'>${product.price}</p>
                    </div>
                </StyledCard>
                ))}
            </div>
        </StyledProducts>
    );
}
