const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  paymentId: {type: String, required: true},
  type: {type: String, required: true},
  name: {type: String, required: true},
  company: {type: String, required: true},
  description: {type: String, required: true},
  price: {type:Number, required:true}
  cardDetails: {
            cardNumber: {type:Number, required:true}
            cvv:{type: Number, required: true}
            expirationDate:{type: Date, required: true},
            cardName: {type: String, required: true},
            }

});



module.exports = mongoose.model('Payment', PaymentSchema);
