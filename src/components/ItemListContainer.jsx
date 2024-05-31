import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [Items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items");
        const queryCollection = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        
        getDocs(queryCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));
            } else {
                setItems([]);
            }
            setLoading(false);
        });
    }, [id]);

    return (
        <>
            {!id && <Carousel />}
            <div className="container">
                <div className="row my-5">
                    {loading ? <Loading /> : <ItemList items={Items} />}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;


