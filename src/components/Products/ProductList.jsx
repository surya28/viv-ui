import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Pagination, Spin, Empty } from 'antd';


const ProductList = ({ category, search }) => {
    const ITEMS_PER_PAGE = 30;
    const [pageNumber, setPageNumber] = useState(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [total, setTotal] = useState(0)

    const fetchData = async (url) => {
        try {
            const response = await fetch(url)
            const result = await response.json();
            setLoading(false);
            setProducts(result?.products);
            setTotal(result?.total)
        } catch (err) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchData('https://dummyjson.com/products');
    }, [])

    useEffect(() => {
        if (category?.length > 0) {
            fetchData(`https://dummyjson.com/products/category/${category}`);
        } else {
            fetchData('https://dummyjson.com/products');
        }
    }, [category])

    useEffect(() => {
        if (search?.length > 0) {
            fetchData(`https://dummyjson.com/products/search?q=${search}`);
        } else {
            fetchData('https://dummyjson.com/products');
        }
    }, [search])

    if (loading) {
        return <Spin size='large' className='mx-auto' />
    }

    if (error || products?.length === 0) {
        return <Empty />
    }

    const onChange = (page) => {
        setPageNumber(page);
        fetchData(`https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${pageNumber * ITEMS_PER_PAGE}`);
        window.scroll(0, 0);
    };

    return (
        <div>
            <div className='mt-8 flex flex-wrap justify-start gap-7'>
                {
                    products?.map(product => {
                        return (
                            <ProductCard product={product} key={product?.id} />
                        )
                    })
                }
            </div>
            <Pagination
                className='text-center'
                pageSize={30}
                current={pageNumber}
                total={total}
                showSizeChanger={false}
                onChange={onChange} />
        </div>
    )
}

export default ProductList