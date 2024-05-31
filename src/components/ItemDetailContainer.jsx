import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null); 
    const [visible, setVisible] = useState(true);
    const { id } = useParams();

    // Acceso a productos via Firestore
    useEffect(() => {
        const db = getFirestore();
        const productoDoc = doc(db, "Items", id);
        getDoc(productoDoc).then(snapShot => {
            if (snapShot.exists()) {
                setItem({ id: snapShot.id, ...snapShot.data()});
                setVisible(false);
            }
        });
    }, [id]);

    return (
        <div className="container">
            <div className="row my-5">
                {visible ? <Loading /> : <ItemDetail item={item} />}
            </div>
        </div>
    );
}

export default ItemDetailContainer;
