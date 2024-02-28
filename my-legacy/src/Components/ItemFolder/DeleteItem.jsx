import axios from "axios";


function DeleteItem() {
axios
        .get("http://localhost:8081/item/delete")
        .then((response) => {
            setItems(response.data)
        })
        .catch(error => console.error(error))


    return ( 

        <DeleteItem/>


     );
}

export default DeleteItem;