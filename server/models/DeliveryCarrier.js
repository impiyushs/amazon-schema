const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  orderId: {type: String, required: true},
  modeOfTransport: {type: String, required: true},
  company: {type: String, required: true},
  description: {type: String, required: true},
  charges: {type:Number, required:true}
  carrier: {
            name: {type: String, required: true},
            email:{type: String, required: true},
            phone:{type: Number, required: true},
            address{
              street: {type: String, required: true},
              city: {type: String, required:true}
            }
          }
  shippingDate: {type: Date, default: Date.now, required: true},
  deliveryDate: {type: Date, required: true},

});



module.exports = mongoose.model('Delivery', DeliverySchema);
