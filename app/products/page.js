import React,{Suspense} from 'react';
import CategoryList from '@/components/categoryList';
import ProductList from '@/components/productList';

async function getProducts() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products/')
    const products = await res.json();
    return products;
}

async function getCategories(){
    const res =await fetch('https://api.escuelajs.co/api/v1/categories')
    const categories = await res.json();
    return categories;
}

const ProductsPage = async () => {
    const products = await getProducts();
    const categories = await getCategories();
    console.log(categories);
    return (
        <>
        <Suspense fallback={<p>Loading Categories...</p>}>
            <CategoryList categories={categories} />
        </Suspense>

        <Suspense fallback={<p>Loading Products...</p>}>
            <ProductList products={products} />
        </Suspense>
        </>
    )
}
export default ProductsPage;