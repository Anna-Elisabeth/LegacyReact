import axios from "axios";
import { useState,useEffect} from "react";
import { useNavigate, params } from "react-router-dom";
import Item from "./Item";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import DeleteItem from "./DeleteItem";


function DisplayItem(){

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState ("");
    const [items, setItems] = useState([]);

    useEffect(DisplayItem, [])

    function GetItems() {

        axios
        .get("http://localhost:8081/item/read")
        .then((response) => {
            setItems(response.data)
        })
        .catch(error => console.error(error))
    }

  

    return(

      
    <Card className="col-sm-6 col-md-4 col-lg-3 m-4">
    <div className="flex">
      <div className="card-body card-text">
        <h4 className="card-title"></h4>
          <img
          src={RS4}
          alt="RS"
          width="100%"
          height="15%"
          className="d-inline-block align-text-middle"
        />
        <p>{"Item: £" + props.name} </p>
        <p> {"Price: " + props.price}</p>
        <p> {"Quanttity: " + props.quantity}</p>
     
        <select>
          {/* <option onSelect={}>Add</option>
          <option onSelect={}>Amend</option> */}
          <option onSelect={<DeleteItem/>}>Delete</option>
        </select>
      </div>
    </div>
  </Card>
    )

        
      


}

export default DisplayItem;