// const mongoose = require("mongoose");


// const ProductSchema = new mongoose.Schema(
//     {
//         title : {type: String, require: true, unique: true},
//         desc: {type: String, require: true},
//         img: {type: String, require: true},
//         categories: {type: Array},
//         size: {type: Array },
//         color: {type: Array },
//         price: {type: Number, require: true},
//         inStock: {type: Boolean, default: true},
        
//     },
//     {timestamps: true}
// )
// module.exports = mongoose.model("Product", ProductSchema);

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);