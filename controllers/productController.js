const path = require("path");

const productService = require("../services/productService");

exports.getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname, "../view/product.html"));
};

exports.getProductById = (req, res) => {
    const result = productService.getProductById(req.params.id);
    res.send(result);
};

exports.postProduct = (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({value: data.productName});

};
