import PropTypes from "prop-types";

function Item(props) {


     
        return ( 
    
    <div>
    
    <tr>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td>{props.quantity}</td>
    
    </tr>
    
    </div>
    
    
    
         );
    }
    
    Item.propTypes = {
        name: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
    }
    
    export default Item;