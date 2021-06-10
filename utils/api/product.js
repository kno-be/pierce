import axios from 'axios';

export default async function createProduct(){
    var titleInput = document.getElementById("title")
    var priceInput = document.getElementById("price")
    var colorInput = document.getElementById("color")
    var tagsInput = document.getElementById("tags")

    var product = {
        title:titleInput.value,
        price:priceInput.value,
        color:colorInput.value,
        tags:tagsInput.value
    }

    axios.post("http://localhost:3000/product",product).then(response => {
        if(response.status == 200) {
            alert("Product added!")
        }
    }).catch(err=> {
        alert("Error!")
    })

}