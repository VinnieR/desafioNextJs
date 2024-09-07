import ProductInfo from './ProductInfo';
import Header from '@/app/Components/Header.styled';
import Footer from '@/app/Components/Footer.styled';

// Função para buscar dados do produto via SSR
async function fetchProductData(id) {
    const res = await fetch(`https://fakestoreapi.in/api/products/${id}`, {
        cache: 'no-store', // Evitar cache para dados dinâmicos
    });

    if (!res.ok) {
        throw new Error('Failed to fetch product data');
    }

    return await res.json();
}

// Página principal que usa SSR para carregar dados do produto
export default async function ProductPage({ params }) {
    const product = await fetchProductData(params.id); // Pega params.id aqui e passa para fetchProductData

    return (
        <>
            <div className='flex-container'>
                <Header />
                <ProductInfo product={product} /> 
                <Footer />
            </div>
        </>
    );
}
