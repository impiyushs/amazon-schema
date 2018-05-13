const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: {type: String, required: true},
  category: {type: String, required: true},
  name: {type: String, required: true},
  company: {type: String, required: true},
  description: {type: String, required: true},
  price: {type:Number, required:true}
  sellers: [ {
            sellerId:{type: String, required: true}
            }
          ]

  productDimensions{
    height: {type:Number}
    weight: {type:Number}
    length: {type:Number}
    width: {type:Number}
  }

});



module.exports = mongoose.model('Product', ProductSchema);
