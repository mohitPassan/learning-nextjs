import axios from "axios";

const SSR = ({ products }) => {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((products) => (
                    <li key={products.id}>
                        <strong>{products.name}</strong> (₹ {products.price})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getServerSideProps = async () => {
    const res = await axios.get("http://localhost:3001/products");
    const products = res.data;

    return {
        props: {
            products,
        },
    };
};

export default SSR;
