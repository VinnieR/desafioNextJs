import ProductInfoStyleProvider from '@/app/Components/ProductInfoStyleProvider';

export default function ProductInfo({ product }) {
    return (
        <ProductInfoStyleProvider>
            <div className='product-image-container'>
                <img src={product.product.image} alt={product.product.title} />
            </div>
            <div className='product-info-container'>
                <h2>Category: <span style={{textTransform: 'capitalize'}}>{product.product.category}</span></h2>
                <h3 className='product-info-title'>{product.product.title}</h3>
                <div className='product-info-specs'>
                    <h4 className='spec-info'>Brand: <span className='capitalize'>{product.product.brand}</span></h4>
                    <h4 className='spec-info'>Model: <span className='capitalize'>{product.product.model}</span></h4>
                    <h4 className='spec-info'>Color: <span className='capitalize'>{product.product.color}</span></h4>
                </div>
                <p className='product-info-description'>{product.product.description}</p>
                <div id='addToCartContainer'>
                    <div id='product-info-price-container'>
                        <span id='product-info-price' className='price'>Price: ${product.product.price}</span>
                    </div>
                    <button type='button' id='addToCartButton'>Add to cart</button>
                </div>
            </div>
        </ProductInfoStyleProvider>
    );
}
