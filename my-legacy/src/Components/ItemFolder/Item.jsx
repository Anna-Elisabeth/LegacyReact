




function Item() {


add 
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
    id: PropTypes.number,
}

export default Item;