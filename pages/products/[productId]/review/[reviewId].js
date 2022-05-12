import { useRouter } from "next/router";

const ReviewPage = () => {
    const router = useRouter();

    const { productId, reviewId } = router.query;
    
    return (
        <h1>Product: {productId}, Review: {reviewId}</h1>
    )
}

export default ReviewPage;