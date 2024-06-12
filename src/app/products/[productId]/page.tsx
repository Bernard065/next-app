import { FC } from "react";
import Link from "next/link";

interface ProductDetailsProps {
    params: {
        productId: string;
    };
}

const ProductDetails: FC<ProductDetailsProps> = ({ params }) => {
    const { productId } = params;

    return (
        <>
            <h1>Product Detail Page</h1>
            <h2>Product ID: {productId}</h2>
            <Link href="/products">Back to Product List</Link>
        </>
    );
};

export default ProductDetails;
