import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore, } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart, getCountProducts, getSumProducts } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [orderId, setOrderId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const generarOrden = () => {
        if (nombre === "" || email === "" || celular === "") {
            setErrorMessage("Por favor, complete todos los campos del formulario.");
            return;
        }

        const buyer = { nombre, email, celular };
        const items = cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio }));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = { buyer, items, date: currentDate, total: getSumProducts() };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            setErrorMessage(""); 
            setNombre("");
            setEmail("");
            setCelular("");
            clear();
        });

        if (getCountProducts() === 0 && !orderId)  {
            return (
                <div className="container my-5">
                    <div className="row">
                        <div className="col text-center">
                            <h3>No se encontraron productos en el carrito :(</h3>
                            <Link to={"/"} className="btn colorVioleta text-white my-5">Volver a la página principal</Link>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="container my-5">
            {!orderId ?
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Celular</label>
                            <input type="text" className="form-control" onInput={(e) => { setCelular(e.target.value) }} />
                        </div>
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        <button type="button" className="btn colorVioleta text-black rounded-3 m-1" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td>X{item.quantity}</td>
                                    <td className="text-end">{item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${getSumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> : "" }
            <div className="row my-5">
                <div className="col text-center">
                    {orderId && <div className="alert alert-light" role="alert">Felicitaciones Tu ID de compra es: <b>{orderId}</b></div>}
                </div>
            </div>
        </div>
    );
}

export default Checkout;
