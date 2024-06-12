import Link from "next/link"


// export default function ProductList() {
//     const productsId: number[] = [1, 2, 3];
//     return (
//         <>
//             <h1>Product List</h1>
//             {productsId.map(productId => (
//                 <h2 key={productId}>Product {productId}</h2>
//             ))}
//             <Link href="/">Return to Home Page</Link>
//         </>
//     ) 
// }

const ProductList = () => {
    const productsId = [1, 2, 3];

    return (
        <>
            <h1>Product List</h1>
            {productsId.map(productId => (
                <h2 key={productId}>
                    <Link href={`/product/${productId}`}>Product {productId}</Link></h2>
            ))}
            <Link href='/'>Return Home</Link>
        </>
    )
}

export default ProductList;