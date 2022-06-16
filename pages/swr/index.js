import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const SWR = () => {
    const { data, error } = useSWR("http://localhost:3001/orders", fetcher);

    if (error) {
        return (
            <>
                <h1>There was an error</h1>
                <p>Error message: {error}</p>
            </>
        );
    }

    if (!data) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Orders</h1>
            {data &&
                data.map((order) => {
                    return (
                        <div key={order.id}>
                            <p>
                                <strong>Ordered by: {order.employee}</strong>
                            </p>
                            <strong>Products ordered</strong>
                            <ol>
                                {order.products.map((product) => {
                                    return (
                                        <p key={product.id}>
                                            ID: {product.id}, Quantity:{" "}
                                            {product.quantity}
                                        </p>
                                    );
                                })}
                            </ol>
                            <hr />
                        </div>
                    );
                })}
        </div>
    );
};

export default SWR;
