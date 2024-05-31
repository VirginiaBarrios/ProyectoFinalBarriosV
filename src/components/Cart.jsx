import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/images/trash3.svg";

const Cart = () => {
    const {cart, removeItem, clear, getCountProducts, getSumProducts} = useContext(CartContext);

    if (getCountProducts() == 0 ) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3>No se encontraron productos en el carrito :( </h3>
                        <Link to={"/"} className="btn colorVioleta text-white my-5">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div className="conteiner">
            <div className="row">
                <div className="col my-5">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn colorVioleta text-black rounded-3 m-1" onClick={clear}>Vaciar Carrito</button></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                    <td className="align-middle text-center">{item.nombre}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">{item.quantity}</td>
                                    <td className="align-middle text-center"><img src={trash} width={22} alt="Eliminar" title="Eliminar Producto" onClick={() => {removeItem(item.id)}} /></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2} className="text-center"><b>Total</b></td>
                                <td className="text-center"><b>${getSumProducts()}</b></td>
                                <td>&nbsp;</td>
                                <td className="text-end"><Link to={"/checkout"} className="btn colorVioleta text-black rounded-3 m-1">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;