const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SellerSchema = new mongoose.Schema({
  details{
          firstName: {type: String, required: true},
          lastName: {type: String, required: true},
          email: {type: String, required: true},
          phone: {type: Number, required: true},
          password: {type: String, required: true},
          addresses: [
            {
              street: {type: String, required: true},
              city: {type: String, }
            }
          ]
          isDeleted: {
            type: Boolean,
            default: false
          }
        }`  `
  products[ {
          productId: {type:String, required:true},
          discount: {type:Number}
        }
      ]

  orders[ {
          orderId: {type:String, required:true}
          }
        ]

});

SellerSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

SellerSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Seller', SellerSchema);
