
const express = require("express");

const app = express();

//importing routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use(express.static("public"));
app.use(express.json());

//use the routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
