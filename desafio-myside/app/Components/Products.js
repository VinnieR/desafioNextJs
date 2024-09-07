import StyledProducts from './products.styleProvider';
import StyledCard from './ProductCard.styled';
import { useState, useEffect, useMemo } from 'react';
import { Popover } from 'react-bootstrap';


function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default function ProductsJS() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 21;

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.in/api/products?limit=150");
            const data = await response.json();

            const productArray = data.products.map(product => ({
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
            }));

            setProducts(productArray);
        } catch (error) {
            console.error('Error during products fecth:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setCurrentPage(1);
    };

    const handlePriceRangeChange = (e) => {
        setSelectedPriceRange(e.target.value);
        setCurrentPage(1);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
        setCurrentPage(1);
    };

    const debouncedSearchQuery = useDebounce(searchQuery, 300);

    const filteredProducts = useMemo(() => {
        let filtered = products;

        if (selectedCategory) {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        if (selectedPriceRange) {
            switch (selectedPriceRange) {
                case '0-50':
                    filtered = filtered.filter(product => product.price <= 50);
                    break;
                case '50-100':
                    filtered = filtered.filter(product => product.price > 50 && product.price <= 100);
                    break;
                case '100+':
                    filtered = filtered.filter(product => product.price > 100);
                    break;
                default:
                    break;
            }
        }

        if (debouncedSearchQuery) {
            const query = debouncedSearchQuery.toLowerCase();
            filtered = filtered.filter(product => 
                product.title.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query)
            );
        }

        if (sortOrder === 'asc') {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'desc') {
            filtered = filtered.sort((a, b) => b.price - a.price);
        } else if (sortOrder === 'alphabetical') {
            filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        }

        return filtered;
    }, [products, debouncedSearchQuery, selectedCategory, selectedPriceRange, sortOrder]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const [showPopover, setShowPopover] = useState(false);

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
        window.scrollTo({top: 0, behavior:'smooth'});
        return;
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
        window.scrollTo({top: 0, behavior:'smooth'});
        return;
    };

    const categories = useMemo(() => {
        const cats = products.map(product => product.category);
        return ['All', ...new Set(cats)];
    }, [products]);

    return (
        <StyledProducts>
            <div id='products-header'>
                <div id="product-header-title">
                    <h1>Products</h1>
                </div>
                <div id="product-header-search">
                    <input
                        id='search-input'
                        type='search'
                        placeholder='Search'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div id="product-header-filter">
                    <button id="filter-button" type="button" onClick={() => setShowPopover(!showPopover)}>
                        Filter
                    </button>
                    {showPopover && (
                        <Popover id="popover-filter">
                            <div>
                                <select value={selectedCategory} onChange={handleCategoryChange}>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category === 'All' ? '' : category}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </option>
                                    ))}
                                </select>
                                <select value={selectedPriceRange} onChange={handlePriceRangeChange}>
                                    <option value="">Price range</option>
                                    <option value="0-50">$0 - $50</option>
                                    <option value="50-100">$50 - $100</option>
                                    <option value="100+">$100+</option>
                                </select>
                                <select value={sortOrder} onChange={handleSortOrderChange}>
                                    <option value="">Sort By</option>
                                    <option value="asc">Increasing Price</option>
                                    <option value="desc">Decreasing Price</option>
                                    <option value="alphabetical">Alphabetical Order</option>
                                </select>
                            </div>
                        </Popover>
                    )}
                </div>
            </div>
            <div id='products-container'>
                {currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                        <StyledCard key={product.id} id={`product-${product.id}`} href={`/Products/${product.id}`}>
                            <div className='card-image-container'>
                                <img src={product.image} alt={product.title} width={150} />
                            </div>
                            <div className='card-body'>
                                <div className='card-title-container'>
                                    <h3>{product.title.length > 100 ? `${product.title.substr(0, 50)}...` : product.title}</h3>
                                </div>
                                <div className='card-description-container'>
                                    <p>{product.description.length > 250 ? `${product.description.substr(0, 250)}...` : product.description}</p>
                                </div>
                                <p className='card-price price'>${product.price}</p>
                            </div>
                        </StyledCard>
                    ))
                ) : (
                    <p>No Product Found</p>
                )}
            </div>

            {totalPages > 1 && (
                <div id='pagination-controls'>
                    <button 
                        onClick={handlePrevPage} 
                        disabled={currentPage === 1}
                        className='index-pagination-button'
                    > &lt; </button>
                    <span id='page-index'>{currentPage} of {totalPages}</span>
                    <button 
                        onClick={handleNextPage} 
                        disabled={currentPage === totalPages}
                        
                    > &gt; </button>
                </div>
            )}
        </StyledProducts>
    );
}
