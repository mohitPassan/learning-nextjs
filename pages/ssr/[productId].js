import axios from "axios";
import Head from "next/head";

const ProductData = ({ product }) => {
    return (
        <>
            <Head>
                <title>{product.id}: {product.name}</title>
            </Head>
            <div>
                <h1>
                    {product.id}: {product.name}
                </h1>
                <p>{product.price}</p>
                <p>
                    <i>{product.description}</i>
                </p>
            </div>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const { params } = context;
    const { productId } = params;

    try {
        const res = await axios.get(
            `http://localhost:3001/products/${productId}`
        );

        if (res.status !== 200) {
            return {
                notFound: true,
            };
        }

        const product = res.data;

        return {
            props: {
                product,
            },
        };
    } catch (e) {
        console.log(e.message);
        return {
            notFound: true,
        };
    }
};

export default ProductData;
