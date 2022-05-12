import { useRouter } from "next/router";

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <h1>Details of the product with id: {id}</h1>
    )
}

export default ProductDetail;