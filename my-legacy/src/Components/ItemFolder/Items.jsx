import Item from "../Components"
import axios from 'axios';
import {useEffect, useState} from 'react';

function Items() {


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState ("");
    const [items, setItems] = useState([])
    const itemComponent = []
    
    function getItems() {
        axios
            .get("http://localhost:8081/items/read")
            .then((response) => {
                setItems(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getItems, [])

    for (let item of items) {
        itemComponent.push(
            <Item
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                getItems={getItems}
            />)
    }
    
    
    const handleSubmit = event => 
    event.preventDefault();


      
    
    axios.post("http://localhost:8081/item/create", {name, price, quantity})
    .then(response=>{
    setName("");
    setPrice("");
    setQuantity("")
    
    }
        )
        .catch(error => console.error(error))


    return ( );
}

export default Items;