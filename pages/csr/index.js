import axios from "axios";
import { useState, useEffect } from "react";

const CSR = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const res = await axios.get("http://localhost:3001/orders");
            const orders = res.data;
            setOrders(orders);
        };

        if (orders.length === 0) {
            fetchOrders();
        }
    });

    return (
        <div>
            <h1>Orders</h1>
            {orders.map((order) => {
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

export default CSR;
