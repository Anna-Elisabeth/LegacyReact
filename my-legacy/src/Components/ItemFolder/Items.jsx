import DisplayItem from './DisplayItems';
import axios from 'axios';
import {useEffect, useState} from 'react';
import DeleteItem from "./DeleteItem";

function Items() {


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState ("");
    const [items, setItems] = useState([])

}

    const itemComponent = []
    
    function getItems() {
        axios
            .get("http://localhost:8081/item/read")
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
    
    const handleSubmit = event => {
        event.preventDefault();

    
    axios.post("http://localhost:8081/item/create", {name, price, quantity})
    .then(response=>{
    setName("");
    setPrice("");
    setQuantity("")
    
    }
        )
        .catch(error => console.error(error))


    return ( 

    <div>
<form onSubmit={handleSubmit} >

    <label> Item Name </label>
        <input id="itemName" onChange={event => setName(event.target.value)} placeholder="Item Name" type = "text" required></input>
        <label> Item Price </label>
        <input id="itemPrice" onChange={event => setPrice(event.target.value)} placeholder="Item Price" type = "text" required></input>   
        <label> Item Quantity </label>
        <input id="itemQuantity" onChange={event => setQuantity(event.target.value)} placeholder="Item Quantity" type = "text" required></input>

</form>

    </div>
    );
}

export default Items;