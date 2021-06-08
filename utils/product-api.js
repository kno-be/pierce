export function createProduct(){
    var titleInput = document.getElementById("title")
    var priceInput = document.getElementById("price")

    var product = {
        title: titleInput.value,
        price: priceInput.value,
    }

    axios.post("http://localhost:3000/product",product).then(response => {
        if(response.status == 200) {
            alert("Product added!")
        }
    }).catch(err=> {

    })

}