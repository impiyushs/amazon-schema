const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderId: {type: String, required:true}
  sellerId: {type: String, required: true}
  buyerId: {type: String, required: true}
  orderDate: {type: Date, default: Date.now, required: true},
  products: [
    {
      productId: {type:String, required:true},
      discount: {type: Number},
      price: {type:Number}
    }
  ]
  shippingAdress:{
    street: {type: String, required: true},
    city: {type: String, required: true}
  }
  userEmail: {type: String, required: true}
  userPhone: {type: Number, required: true}
  totalPrice: {type: Number, required: true}
  paymentId: {type: String, required: true}

});

module.exports = mongoose.model('Order', OrderSchema);
