const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("submit function called");

    const productName = event.target.productName.value;

    const obj = {
        "productName": productName
    }
     axios.post('http://localhost:4000' + "/products", obj)
        .then((result) => {
            console.log(`value returned from post: ${result.data}`);
        });
}